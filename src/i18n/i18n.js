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

      heroTitle: "Natural Support for Bone & Joint Recovery",
      heroText:
        "Trusted herbal davai helping bone strength, joint comfort, and recovery for the last 12–15 years.",
      price: "Only ₹350",

      whyChooseTitle: "Why Choose HaddiJhod?",
      whyChooseText:
        "Trusted traditional support with quality, care, and simplicity.",
      trustedTitle: "12–15 Years Trusted",
      trustedDesc:
        "Traditional herbal support trusted by people for over 12–15 years.",
      herbalTitle: "Herbal Formula",
      herbalDesc:
        "Natural jaddi butti based herbal davai prepared with traditional care.",
      priceTitle: "Affordable Price",
      priceDesc:
        "Complete 3-day herbal course available at only ₹350 with free delivery.",
      easyTitle: "Easy Ordering",
      easyDesc:
        "Simple WhatsApp and phone ordering with quick customer support.",

      productTitle: "Haddi Jhod Herbal Davai",
      productText:
        "Traditional herbal davai designed to support bone recovery, joint comfort, swelling discomfort, and natural healing support with trusted care.",
      benefit1: "Bone Recovery Support",
      benefit2: "Joint Pain Support",
      benefit3: "Swelling & Discomfort Support",
      benefit4: "3-Day Herbal Course",
      buyNow: "Buy Now",

      aboutTitle: "About HaddiJhod",
      aboutText1:
        "I am Kuldeep Singh Rajput, a farmer from Gangda, Harda / Agar Malwa, Madhya Pradesh.",
      aboutText2:
        "For the last 12–15 years, I have been helping people by providing a traditional herbal davai directly from my village.",
      aboutText3:
        "Earlier, I used to give this davai free of cost, but many patients faced difficulty traveling. So now I am delivering it across India to help more people easily.",
      readMore: "Read More",

      contactTitle: "Order Directly from HaddiJhod",
      contactText:
        "Fast response • Trusted service • WhatsApp & Phone support available",
      callNow: "Call Now",
      whatsappOrder: "WhatsApp Order",

      footerText:
        "Trusted herbal davai supporting bone strength, joint comfort, and recovery with traditional care.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      whatsappAvailable: "WhatsApp Orders Available",
      rightsReserved: "All Rights Reserved.",

      aboutPageTitle: "About Us",
      aboutPageText:
        "I am Kuldeep Singh Rajput, a farmer from Gangda, Harda / Agar Malwa, Madhya Pradesh. For the last 12–15 years, I have been helping people by providing a traditional herbal davai directly from my village.\n\nEarlier, I used to give this davai free of cost, but many patients faced difficulty traveling. So now I am delivering it across India to help more people easily.\n\nMy aim is to continue helping people with honesty, quality, and traditional care.",

      productPageTitle: "Our Product",
      productPageText:
        "Haddi Jhod Herbal Davai is a trusted traditional jaddi butti based medicine prepared naturally to support bone, joint, and recovery-related concerns.",

      orderPageTitle: "Order Haddi Jhod Herbal Davai",
      orderPageSubtitle:
        "Fill details, pay by UPI, and confirm your order on WhatsApp.",
      orderSummary: "Order Summary",
      productLabel: "Product",
      orderProductName: "Haddi Jhod Herbal Davai",
      priceLabel: "Price",
      quantityLabel: "Quantity",
      totalLabel: "Total",
      freeDeliveryLine: "Free delivery included • Delivery in 3–6 days • No COD",
      upiPayment: "UPI Payment",
      payAmount: "Pay",
      paymentInstruction:
        "After payment, tick payment confirmation and submit order.",
      customerDetails: "Customer Details",
      fullName: "Full Name",
      mobileNumber: "Mobile Number",
      address: "Address",
      fullAddress: "Full Address",
      quantity: "Quantity",
      enterName: "Enter your name",
      enterPhone: "Enter your mobile number",
      enterAddress: "Enter your full delivery address",
      pack1: "1 Pack - ₹350",
      pack2: "2 Packs - ₹700",
      pack3: "3 Packs - ₹1050",
      paymentConfirmText: "I have completed UPI payment of",
      whatsappAfterSubmit:
        "After submitting, WhatsApp will open with your order details. Please send payment screenshot there.",
      submitOrder: "Submit Order",
      submitAndWhatsapp: "Submit Order & Confirm on WhatsApp",
      successMessage: "Order submitted successfully!",
      paymentRequiredMsg:
        "Please confirm that you have completed UPI payment.",
      paymentDoneText: "UPI Done",
      whatsappOrderMsg:
        "Namaste, I have placed an order for Haddi Jhod Herbal Davai.",
      failedOrderMsg: "Failed to submit order",

      contactPageTitle: "Contact Us",
      contactPageText:
        "You can reach us anytime for orders, support, or queries.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",

      secureRazorpayOrder: "Secure Razorpay Order",
detailsStep: "Details",
paymentStep: "Payment",
successStep: "Success",
city: "City",
enterCity: "Enter city",
pincode: "Pincode",
enterPincode: "Enter pincode",
invalidPhone: "Please enter a valid 10 digit mobile number",
invalidPincode: "Please enter a valid 6 digit pincode",
invalidQuantity: "Please select valid quantity",
phoneHelp: "Enter 10 digit Indian mobile number",
packText: "Pack",
continueToPayment: "Continue to Secure Payment",
processingPayment: "Processing...",
securePaymentLine: "100% secure payment powered by Razorpay",
razorpayLoadError: "Payment gateway failed to load. Please refresh and try again.",
paymentVerifyFailed: "Payment verification failed. Please contact support.",
securePaymentLine: "Secure payment • Fast order confirmation",
deliveryCharge: "Delivery",
freeText: "Free",
secure: "Secure",
fast: "Fast",
support: "Support",
paymentSuccessBadge: "Payment Successful",
orderConfirmedTitle: "Order Confirmed Successfully!",
orderConfirmedSubtitle: "Thank you. Your order has been received and our team will contact you shortly.",
orderIdLabel: "Order ID",
paymentStatusLabel: "Payment Status",
paidText: "Paid",
orderProcessTitle: "Order Process",
processConfirmed: "Order Confirmed",
processProcessing: "Processing",
processDispatch: "Packed / Dispatched",
processOutForDelivery: "Out for Delivery",
processDelivered: "Delivered",
deliveryLine: "Expected delivery: 3–6 days. Our team will contact you on your registered mobile number.",
whatsappSupport: "Contact on WhatsApp",
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

      heroTitle: "हड्डी और जोड़ों की रिकवरी के लिए प्राकृतिक सहायता",
      heroText:
        "12–15 वर्षों से भरोसेमंद हर्बल दवाई, जो हड्डियों, जोड़ों और रिकवरी में सहायता करती है।",
      price: "केवल ₹350",

      whyChooseTitle: "हड्डीजोड़ क्यों चुनें?",
      whyChooseText: "गुणवत्ता, भरोसा और सरलता के साथ पारंपरिक सहायता।",
      trustedTitle: "12–15 वर्षों का भरोसा",
      trustedDesc:
        "12–15 वर्षों से लोगों द्वारा भरोसेमंद पारंपरिक हर्बल सहायता।",
      herbalTitle: "हर्बल फॉर्मूला",
      herbalDesc:
        "प्राकृतिक जड़ी-बूटी आधारित हर्बल दवाई, पारंपरिक तरीके से तैयार।",
      priceTitle: "किफायती कीमत",
      priceDesc: "₹350 में पूरा 3 दिन का कोर्स, फ्री डिलीवरी के साथ।",
      easyTitle: "आसान ऑर्डर",
      easyDesc: "WhatsApp और फोन के माध्यम से आसान ऑर्डर सुविधा।",

      productTitle: "हड्डी जोड़ हर्बल दवाई",
      productText:
        "पारंपरिक हर्बल दवाई, जो हड्डी रिकवरी, जोड़ों के आराम, सूजन और प्राकृतिक healing support में सहायता करती है।",
      benefit1: "हड्डी रिकवरी में सहायता",
      benefit2: "जोड़ों के दर्द में सहायता",
      benefit3: "सूजन और discomfort में सहायता",
      benefit4: "3 दिन का हर्बल कोर्स",
      buyNow: "अभी खरीदें",

      aboutTitle: "हड्डीजोड़ के बारे में",
      aboutText1:
        "मैं कुलदीप सिंह राजपूत हूँ, जो मध्य प्रदेश के गांगडा, हरदा / आगर मालवा से एक किसान हूँ।",
      aboutText2:
        "पिछले 12–15 वर्षों से मैं लोगों को यह पारंपरिक जड़ी-बूटी आधारित दवाई सीधे अपने गांव से देता आ रहा हूँ।",
      aboutText3:
        "पहले मैं यह दवाई सेवा भाव से देता था, लेकिन कई लोगों को गांव तक आने में परेशानी होती थी। इसलिए अब मैं इसे पूरे भारत में उपलब्ध करा रहा हूँ।",
      readMore: "और पढ़ें",

      contactTitle: "हड्डीजोड़ से सीधे ऑर्डर करें",
      contactText:
        "तेज़ जवाब • भरोसेमंद सेवा • WhatsApp और फोन सहायता उपलब्ध",
      callNow: "अभी कॉल करें",
      whatsappOrder: "WhatsApp पर ऑर्डर करें",

      footerText:
        "हड्डी, जोड़ और रिकवरी में सहायता करने वाली भरोसेमंद हर्बल दवाई।",
      quickLinks: "त्वरित लिंक",
      contactUs: "संपर्क करें",
      whatsappAvailable: "WhatsApp ऑर्डर उपलब्ध",
      rightsReserved: "सभी अधिकार सुरक्षित।",

      aboutPageTitle: "हमारे बारे में",
      aboutPageText:
        "मैं कुलदीप सिंह राजपूत हूँ, जो मध्य प्रदेश के गांगडा, हरदा / आगर मालवा से एक किसान हूँ। पिछले 12–15 वर्षों से मैं लोगों को यह पारंपरिक जड़ी-बूटी आधारित दवाई सीधे अपने गांव से देता आ रहा हूँ।\n\nपहले मैं यह दवाई सेवा भाव से देता था, लेकिन कई लोगों को गांव तक आने में परेशानी होती थी। इसलिए अब मैं इसे पूरे भारत में उपलब्ध करा रहा हूँ।\n\nमेरा उद्देश्य है कि मैं ईमानदारी, गुणवत्ता और पारंपरिक सेवा के साथ लोगों की मदद करता रहूं।",

      productPageTitle: "हमारा प्रोडक्ट",
      productPageText:
        "हड्डी जोड़ हर्बल दवाई शुद्ध जड़ी-बूटी से तैयार पारंपरिक दवाई है, जो हड्डी, जोड़ और रिकवरी से जुड़ी समस्याओं में सहायता करती है।",

      orderPageTitle: "हड्डी जोड़ हर्बल दवाई ऑर्डर करें",
      orderPageSubtitle:
        "जानकारी भरें, UPI से भुगतान करें और WhatsApp पर ऑर्डर confirm करें।",
      orderSummary: "ऑर्डर सारांश",
      productLabel: "प्रोडक्ट",
      orderProductName: "हड्डी जोड़ हर्बल दवाई",
      priceLabel: "कीमत",
      quantityLabel: "मात्रा",
      totalLabel: "कुल राशि",
      freeDeliveryLine: "Free delivery included • 3–6 दिन में delivery • COD उपलब्ध नहीं",
      upiPayment: "UPI भुगतान",
      payAmount: "भुगतान करें",
      paymentInstruction:
        "भुगतान के बाद payment confirmation tick करें और order submit करें।",
      customerDetails: "ग्राहक जानकारी",
      fullName: "पूरा नाम",
      mobileNumber: "मोबाइल नंबर",
      address: "पता",
      fullAddress: "पूरा पता",
      quantity: "मात्रा",
      enterName: "अपना नाम दर्ज करें",
      enterPhone: "अपना मोबाइल नंबर दर्ज करें",
      enterAddress: "पूरा delivery address दर्ज करें",
      pack1: "1 पैक - ₹350",
      pack2: "2 पैक - ₹700",
      pack3: "3 पैक - ₹1050",
      paymentConfirmText: "मैंने UPI payment पूरा कर दिया है",
      whatsappAfterSubmit:
        "Submit करने के बाद WhatsApp आपके order details के साथ खुलेगा। कृपया वहाँ payment screenshot भेजें।",
      submitOrder: "ऑर्डर सबमिट करें",
      submitAndWhatsapp: "Order Submit करें और WhatsApp पर Confirm करें",
      successMessage: "ऑर्डर सफलतापूर्वक सबमिट हुआ!",
      paymentRequiredMsg:
        "कृपया confirm करें कि आपने UPI payment पूरा कर दिया है।",
      paymentDoneText: "UPI Done",
      whatsappOrderMsg:
        "Namaste, maine Haddi Jhod Herbal Davai ka order place kiya hai.",
      failedOrderMsg: "ऑर्डर सबमिट नहीं हो पाया",

      contactPageTitle: "संपर्क करें",
      contactPageText:
        "ऑर्डर, सहायता या किसी भी जानकारी के लिए आप हमसे कभी भी संपर्क कर सकते हैं।",
      phoneLabel: "फोन",
      whatsappLabel: "WhatsApp",

      secureRazorpayOrder: "सुरक्षित Razorpay ऑर्डर",
detailsStep: "जानकारी",
paymentStep: "भुगतान",
successStep: "सफल",
city: "शहर",
enterCity: "शहर दर्ज करें",
pincode: "पिनकोड",
enterPincode: "पिनकोड दर्ज करें",
invalidPhone: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें",
invalidPincode: "कृपया सही 6 अंकों का पिनकोड दर्ज करें",
invalidQuantity: "कृपया सही मात्रा चुनें",
phoneHelp: "10 अंकों का भारतीय मोबाइल नंबर दर्ज करें",
packText: "पैक",
continueToPayment: "सुरक्षित भुगतान करें",
processingPayment: "प्रोसेस हो रहा है...",
securePaymentLine: "Razorpay द्वारा सुरक्षित भुगतान",
razorpayLoadError: "Payment gateway load नहीं हुआ। कृपया refresh करके फिर प्रयास करें।",
paymentVerifyFailed: "Payment verification failed. कृपया support से संपर्क करें।",
deliveryCharge: "डिलीवरी",
freeText: "फ्री",
secure: "सुरक्षित",
fast: "तेज़",
support: "सहायता",
paymentSuccessBadge: "भुगतान सफल",
orderConfirmedTitle: "ऑर्डर सफलतापूर्वक Confirm हो गया!",
orderConfirmedSubtitle: "धन्यवाद। आपका ऑर्डर मिल गया है, हमारी टीम जल्द ही आपसे संपर्क करेगी।",
orderIdLabel: "ऑर्डर ID",
paymentStatusLabel: "Payment Status",
paidText: "Paid",
orderProcessTitle: "ऑर्डर प्रक्रिया",
processConfirmed: "ऑर्डर Confirmed",
processProcessing: "Processing",
processDispatch: "Packed / Dispatched",
processOutForDelivery: "Out for Delivery",
processDelivered: "Delivered",
deliveryLine: "Expected delivery: 3–6 दिन। हमारी टीम आपके मोबाइल नंबर पर संपर्क करेगी।",
whatsappSupport: "WhatsApp पर संपर्क करें",
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