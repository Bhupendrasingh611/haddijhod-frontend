import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      product: "Product",
      orderNow: "Order Now",
      contact: "Contact",
      whatsapp: "WhatsApp",
      heroTitle: "Natural Support for Fast Fracture Recovery",
      heroText:
        "Trusted herbal davai helping bone strength and recovery for the last 12 years.",
      price: "Only ₹350",

    whyChooseTitle: "Why Choose HaddiJhod?",
    whyChooseText: "Trusted traditional support with quality, care, and simplicity.",
    trustedTitle: "12 Years Trusted",
    trustedDesc: "Traditional herbal support trusted by customers for over 12 years.",
    herbalTitle: "Herbal Formula",
    herbalDesc: "Natural herbal-based support made with traditional herbal care.",
    priceTitle: "Affordable Price",
    priceDesc: "Professional quality support available at only ₹350.",
    easyTitle: "Easy Ordering",
    easyDesc: "Simple WhatsApp and phone ordering with quick customer support.",

productTitle: "Haddi Jhod Herbal Davai",
productText: "Traditional herbal davai designed to support fracture recovery, bone strength, and better healing support with trusted care.",
benefit1: "Fracture Recovery Support",
benefit2: "Bone Strength Improvement",
benefit3: "Joint Support",
benefit4: "3-Day Herbal Course",
buyNow: "Buy Now",

aboutTitle: "About HaddiJhod",
aboutText1: "For the last 12 years, we have been helping people with traditional herbal support for fracture recovery and stronger bones.",
aboutText2: "Our HaddiJhod Powder is prepared with care, trust, and a focus on supporting recovery during difficult times.",
aboutText3: "Many families trust our product because of its traditional value, affordable price, and genuine customer support.",
readMore: "Read More",

contactTitle: "Order Directly from HaddiJhod",
contactText: "Fast response • Trusted service • WhatsApp & Phone support available",
callNow: "Call Now",
whatsappOrder: "WhatsApp Order",

footerText: "Trusted herbal davai supporting bone strength, joint comfort, and recovery with traditional care.",
quickLinks: "Quick Links",
contactUs: "Contact Us",
whatsappAvailable: "WhatsApp Orders Available",
rightsReserved: "All Rights Reserved.",

aboutPageTitle: "About Us",
aboutPageText: "I am Kuldeep Singh, a farmer from Gangda, Harda / Agar Malwa, Madhya Pradesh. For the last 12–15 years, I have been helping people by providing a traditional herbal davai directly from my village.\n\nEarlier, I used to give this davai free of cost, but many patients faced difficulty traveling. So now I am delivering it across India to help more people easily.\n\nMy aim is to continue helping people with honesty, quality, and traditional care.",
    
productPageTitle: "Our Product",
productPageText: "Haddi Jhod Herbal Davai is a trusted traditional jaddi butti based medicine prepared naturally to support bone, joint, and recovery-related concerns.",

orderPageTitle: "Order Haddi Jhod Herbal Davai",
fullName: "Full Name",
mobileNumber: "Mobile Number",
address: "Address",
quantity: "Quantity",
enterName: "Enter your name",
enterPhone: "Enter your phone number",
enterAddress: "Enter your full address",
pack1: "1 Pack",
pack2: "2 Packs",
pack3: "3 Packs",
submitOrder: "Submit Order",
successMessage: "Order submitted successfully!",

contactPageTitle: "Contact Us",
contactPageText: "You can reach us anytime for orders, support, or queries.",
phoneLabel: "Phone",
whatsappLabel: "WhatsApp",

},
  },

  hi: {
    translation: {
      home: "होम",
      about: "हमारे बारे में",
      product: "प्रोडक्ट",
      orderNow: "अभी ऑर्डर करें",
      contact: "संपर्क करें",
      whatsapp: "व्हाट्सएप",
      heroTitle: "फ्रैक्चर रिकवरी और हड्डी मजबूती के लिए प्राकृतिक सहायता",
      heroText:
        "12 वर्षों से भरोसेमंद हर्बल दवाई जो हड्डियों की मजबूती और रिकवरी में सहायता करता है।",
   price: "केवल ₹350",

    whyChooseTitle: "हड्डीजोड़ क्यों चुनें?",
    whyChooseText: "गुणवत्ता, भरोसा और सरलता के साथ पारंपरिक सहायता।",
    trustedTitle: "12 वर्षों का भरोसा",
    trustedDesc: "12 वर्षों से ग्राहकों द्वारा भरोसेमंद पारंपरिक हर्बल सहायता।",
    herbalTitle: "हर्बल फॉर्मूला",
    herbalDesc: "प्राकृतिक दवाई आधारित पारंपरिक हर्बल सहायता।",
    priceTitle: "किफायती कीमत",
    priceDesc: "केवल ₹350 में भरोसेमंद गुणवत्ता।",
    easyTitle: "आसान ऑर्डर",
    easyDesc: "WhatsApp और फोन के माध्यम से आसान ऑर्डर सुविधा।",

productTitle: "हड्डी जोड़ हर्बल दवाई",
productText: "पारंपरिक हर्बल दवाई जो फ्रैक्चर रिकवरी, हड्डियों की मजबूती और बेहतर उपचार में सहायता करता है।",
benefit1: "फ्रैक्चर रिकवरी सहायता",
benefit2: "हड्डियों की मजबूती",
benefit3: "जोड़ों के लिए सहायता",
benefit4: "3 दिन का हर्बल कोर्स",
buyNow: "अभी खरीदें",

aboutTitle: "हड्डीजोड़ के बारे में",
aboutText1: "पिछले 12 वर्षों से हम लोगों की फ्रैक्चर रिकवरी और हड्डियों की मजबूती के लिए पारंपरिक हर्बल सहायता प्रदान कर रहे हैं।",
aboutText2: "हमारा हड्डीजोड़ पाउडर भरोसे, देखभाल और बेहतर रिकवरी के उद्देश्य से तैयार किया जाता है।",
aboutText3: "कई परिवार हमारे उत्पाद पर इसके पारंपरिक महत्व, किफायती कीमत और सच्चे ग्राहक सहयोग के कारण भरोसा करते हैं।",
readMore: "और पढ़ें",

contactTitle: "हड्डीजोड़ से सीधे ऑर्डर करें",
contactText: "तेज़ जवाब • भरोसेमंद सेवा • WhatsApp और फोन सहायता उपलब्ध",
callNow: "अभी कॉल करें",
whatsappOrder: "WhatsApp पर ऑर्डर करें",

footerText: "हड्डी, जोड़ और रिकवरी में सहायता करने वाली भरोसेमंद हर्बल दवाई।",
quickLinks: "त्वरित लिंक",
contactUs: "संपर्क करें",
whatsappAvailable: "WhatsApp ऑर्डर उपलब्ध",
rightsReserved: "सभी अधिकार सुरक्षित।",

aboutPageTitle: "हमारे बारे में",
aboutPageText: "मैं कुलदीप सिंह हूँ, जो मध्य प्रदेश के गागंडा, हरदा / आगर मालवा से एक किसान हूँ। पिछले 12–15 वर्षों से मैं लोगों को यह पारंपरिक जड़ी-बूटी आधारित दवाई सीधे अपने गांव से देता आ रहा हूँ।\n\nपहले मैं यह दवाई सेवा भाव से देता था, लेकिन कई लोगों को गांव तक आने में परेशानी होती थी। इसलिए अब मैं इसे पूरे भारत में उपलब्ध करा रहा हूँ।\n\nमेरा उद्देश्य है कि मैं ईमानदारी, गुणवत्ता और पारंपरिक सेवा के साथ लोगों की मदद करता रहूं।",

productPageTitle: "हमारा प्रोडक्ट",
productPageText: "हड्डी जोड़ हर्बल दवाई शुद्ध जड़ी-बूटी से तैयार पारंपरिक दवाई है, जो हड्डी, जोड़ और रिकवरी से जुड़ी समस्याओं में सहायता करती है।",

orderPageTitle: "हड्डी जोड़ हर्बल दवाई ऑर्डर करें",
fullName: "पूरा नाम",
mobileNumber: "मोबाइल नंबर",
address: "पता",
quantity: "मात्रा",
enterName: "अपना नाम दर्ज करें",
enterPhone: "अपना मोबाइल नंबर दर्ज करें",
enterAddress: "पूरा पता दर्ज करें",
pack1: "1 पैक",
pack2: "2 पैक",
pack3: "3 पैक",
submitOrder: "ऑर्डर सबमिट करें",
successMessage: "ऑर्डर सफलतापूर्वक सबमिट हुआ!",

contactPageTitle: "संपर्क करें",
contactPageText: "ऑर्डर, सहायता या किसी भी जानकारी के लिए आप हमसे कभी भी संपर्क कर सकते हैं।",
phoneLabel: "फोन",
whatsappLabel: "WhatsApp",

},
  },
};

const savedLanguage = localStorage.getItem("lang") || "hi";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;