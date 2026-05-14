# ==============================
# 1. IMPORT LIBRARIES
# ==============================
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import cv2
import numpy as np
import requests
import joblib
import os

# ==============================
# 2. INIT APP
# ==============================
app = Flask(__name__)
CORS(app)

# ==============================
# 3. LOAD MODELS
# ==============================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

soil_model = load_model(
    os.path.join(BASE_DIR, "models/soil_model_fixed.h5"),
    compile=False
)

crop_model = joblib.load(
    os.path.join(BASE_DIR, "models/crop_model.pkl")
)
print("✅ Models loaded")

# ==============================
# 4. LABELS
# ==============================
soil_classes = ['black', 'clay', 'loamy', 'red', 'sandy']

crop_labels = {
    0: "Barley",
    1: "Cotton",
    2: "Groundnut",
    3: "Maize",
    4: "Millets",
    5: "Oil seeds",
    6: "Paddy",
    7: "Pulses",
    8: "Sugarcane",
    9: "Tobacco",
    10: "Wheat"
}

# ==============================
# 5. HOME ROUTE
# ==============================
@app.route('/')
def home():
    return "✅ Backend Running with AI + Weather"

# ==============================
# 6. PREDICT ROUTE
# ==============================
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # --------------------------
        # IMAGE PROCESSING
        # --------------------------
        file = request.files['image']

        image = cv2.imdecode(
            np.frombuffer(file.read(), np.uint8),
            cv2.IMREAD_COLOR
        )
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        image = cv2.resize(image, (150, 150))
        image = image / 255.0
        image = np.expand_dims(image, axis=0)

        # --------------------------
        # SOIL PREDICTION
        # --------------------------
        pred = soil_model.predict(image)
        soil_type = soil_classes[np.argmax(pred)]

        # --------------------------
        # LOCATION (AUTO)
        # --------------------------
        try:
            loc_res = requests.get("http://ip-api.com/json/", timeout=2)
            loc_data = loc_res.json()

            lat = loc_data['lat']
            lon = loc_data['lon']

        except:
            # fallback (India default)
            lat, lon = 28.7041 , 77.1025

        # --------------------------
        # WEATHER
        # --------------------------
        API_KEY = "a3ddda72a1824497fdbdbd6ed51932e5"  # 🔴 replace

        try:
            url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
            res = requests.get(url, timeout=3)
            data = res.json()

            temperature = data["main"]["temp"]
            humidity = data["main"]["humidity"]

        except:
            temperature = 20
            humidity = 80

        # --------------------------
        # REGION + NDVI
        # --------------------------
        def get_region(lat):
            if lat < 15:
                return 0
            elif lat < 22:
                return 3
            elif lat < 28:
                return 2
            else:
                return 1

        region = get_region(lat)

        ndvi_map = {
            0: 0.75,
            1: 0.45,
            2: 0.85,
            3: 0.65
        }

        ndvi = ndvi_map[region]

        # --------------------------
        # MOISTURE
        # --------------------------
        if humidity > 70:
            moisture = 70
        elif humidity > 50:
            moisture = 50
        else:
            moisture = 30

        # --------------------------
        # ENCODE SOIL
        # --------------------------
        soil_encoded = soil_classes.index(soil_type)

        # --------------------------
        # FINAL INPUT
        # --------------------------
        input_data = [[
            temperature,
            humidity,
            moisture,
            soil_encoded,
            region,
            ndvi
        ]]

        # --------------------------
        # CROP PREDICTION
        # --------------------------
        probs = crop_model.predict_proba(input_data)[0]
        top3 = probs.argsort()[-3:][::-1]

        results = []
        for i in top3:
            results.append({
                "crop": crop_labels[i],
                "confidence": float(round(probs[i], 2))
            })

        # --------------------------
        # RESPONSE
        # --------------------------
        return jsonify({
            "soil": soil_type,
            "temperature": temperature,
            "humidity": humidity,
            "crops": results
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# ==============================
# 7. RUN SERVER
# ==============================
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)