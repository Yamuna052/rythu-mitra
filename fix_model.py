from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D
from tensorflow.keras.layers import Flatten, Dense, Dropout

# Create same architecture manually
model = Sequential([

    Conv2D(32, (3,3), activation='relu', input_shape=(150,150,3)),
    MaxPooling2D(2,2),

    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D(2,2),

    Conv2D(128, (3,3), activation='relu'),
    MaxPooling2D(2,2),

    Flatten(),

    Dense(128, activation='relu'),

    Dropout(0.5),

    Dense(5, activation='softmax')

])

# LOAD ONLY WEIGHTS
model.load_weights("backend/models/soil_model_5class.h5")

# Save clean compatible model
model.save("backend/models/soil_model_fixed.h5")

print("✅ Fixed model saved successfully")