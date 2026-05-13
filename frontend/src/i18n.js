import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Smart crop recommendations for every farmer",
        subtitle: "Upload soil image → AI analyzes → suggests best crops",
        upload: "Upload Soil Image",
        detect: "Detect Crop",
        location: "Enter location",
        report: "Your Soil Report",
        analyze: "Analyze",
        features: "Features",
        how: "How it works",
        demo: "Try Demo",
        analyzeSoil: "Analyze your soil in seconds",
        drag: "Drag & drop soil image",
        soil: "Soil",
        temp: "Temperature",
        humidity: "Humidity",
        crops: "Top 3 Recommended Crops",
        confidence: "Confidence"
      },
    },

    te: {
      translation: {
        title: "ప్రతి రైతుకు స్మార్ట్ పంట సూచనలు",
        subtitle: "మట్టీ చిత్రం అప్‌లోడ్ చేయండి → AI విశ్లేషిస్తుంది → ఉత్తమ పంటలను సూచిస్తుంది",
        upload: "మట్టీ చిత్రం అప్‌లోడ్ చేయండి",
        detect: "పంటను గుర్తించండి",
        location: "స్థానం నమోదు చేయండి",
        report: "మీ మట్టి నివేదిక",
        analyze: "విశ్లేషణ",
        features: "లక్షణాలు",
        how: "ఎలా పనిచేస్తుంది",
        demo: "డెమో చూడండి",
        analyzeSoil: "సెకన్లలో మీ మట్టిని విశ్లేషించండి",
        drag: "మట్టీ చిత్రాన్ని ఇక్కడ పెట్టండి",
        soil: "మట్టి",
        temp: "ఉష్ణోగ్రత",
        humidity: "ఆర్ద్రత",
        crops: "టాప్ 3 పంటలు",
        confidence: "నమ్మకం"
      },
    },

    hi: {
      translation: {
        title: "हर किसान के लिए स्मार्ट फसल सुझाव",
        subtitle: "मिट्टी की फोटो अपलोड करें → AI विश्लेषण करता है → सर्वोत्तम फसल बताता है",
        upload: "मिट्टी की फोटो अपलोड करें",
        detect: "फसल पहचानें",
        location: "स्थान दर्ज करें",
        report: "आपकी मिट्टी रिपोर्ट",
        analyze: "विश्लेषण",
        features: "विशेषताएं",
        how: "कैसे काम करता है",
        demo: "डेमो देखें",
        analyzeSoil: "कुछ सेकंड में मिट्टी का विश्लेषण करें",
        drag: "मिट्टी की फोटो यहाँ डालें",
        soil: "मिट्टी",
        temp: "तापमान",
        humidity: "नमी",
        crops: "शीर्ष 3 फसलें",
        confidence: "विश्वास"
      },
    },

    ta: {
      translation: {
        title: "ஒவ்வொரு விவசாயிக்கும் புத்திசாலி பரிந்துரைகள்",
        subtitle: "மண் படம் பதிவேற்றவும் → AI பகுப்பாய்வு செய்கிறது → சிறந்த பயிர்களை பரிந்துரைக்கிறது",
        upload: "மண் படத்தை பதிவேற்றவும்",
        detect: "பயிர் கண்டறிதல்",
        location: "இடத்தை உள்ளிடவும்",
        report: "உங்கள் மண் அறிக்கை",
        analyze: "பகுப்பாய்வு",
        features: "அம்சங்கள்",
        how: "எப்படி வேலை செய்கிறது",
        demo: "டெமோ பார்க்கவும்",
        analyzeSoil: "சில விநாடிகளில் மண்ணை பகுப்பாய்வு செய்யுங்கள்",
        drag: "மண் படத்தை இங்கே இடுங்கள்",
        soil: "மண்",
        temp: "வெப்பநிலை",
        humidity: "ஈரப்பதம்",
        crops: "சிறந்த 3 பயிர்கள்",
        confidence: "நம்பிக்கை"
      },
    },

    mr: {
      translation: {
        title: "प्रत्येक शेतकऱ्यासाठी स्मार्ट पीक शिफारसी",
        subtitle: "मातीचा फोटो अपलोड करा → AI विश्लेषण करतो → सर्वोत्तम पीक सुचवतो",
        upload: "मातीचा फोटो अपलोड करा",
        detect: "पीक ओळखा",
        location: "स्थान टाका",
        report: "तुमचा माती अहवाल",
        analyze: "विश्लेषण",
        features: "वैशिष्ट्ये",
        how: "कसे कार्य करते",
        demo: "डेमो पहा",
        analyzeSoil: "काही सेकंदांत मातीचे विश्लेषण करा",
        drag: "मातीचा फोटो येथे टाका",
        soil: "माती",
        temp: "तापमान",
        humidity: "आर्द्रता",
        crops: "शीर्ष 3 पिके",
        confidence: "विश्वास"
      },
    },

    pa: {
      translation: {
        title: "ਹਰ ਕਿਸਾਨ ਲਈ ਸਮਾਰਟ ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ",
        subtitle: "ਮਿੱਟੀ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ → AI ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦਾ ਹੈ → ਵਧੀਆ ਫਸਲ ਦਿੰਦਾ ਹੈ",
        upload: "ਮਿੱਟੀ ਦੀ ਤਸਵੀਰ ਅੱਪਲੋਡ ਕਰੋ",
        detect: "ਫਸਲ ਪਛਾਣੋ",
        location: "ਸਥਾਨ ਦਰਜ ਕਰੋ",
        report: "ਤੁਹਾਡੀ ਮਿੱਟੀ ਰਿਪੋਰਟ",
        analyze: "ਵਿਸ਼ਲੇਸ਼ਣ",
        features: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
        how: "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
        demo: "ਡੈਮੋ ਵੇਖੋ",
        analyzeSoil: "ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
        drag: "ਮਿੱਟੀ ਦੀ ਤਸਵੀਰ ਇੱਥੇ ਪਾਓ",
        soil: "ਮਿੱਟੀ",
        temp: "ਤਾਪਮਾਨ",
        humidity: "ਨਮੀ",
        crops: "ਟਾਪ 3 ਫਸਲਾਂ",
        confidence: "ਭਰੋਸਾ"
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;