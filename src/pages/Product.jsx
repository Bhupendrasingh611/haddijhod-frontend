import React, { useState } from "react";
import upiQr from "../assets/upi.jpeg";

const Product = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    mobile: "",
    rating: "5",
    message: "",
  });

  const whatsappNumber = "919399968513";
  const callNumber1 = "9399968513";
  const callNumber2 = "8120282859";
  const price = 350;

  const handleFeedbackChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback({
      name: "",
      mobile: "",
      rating: "5",
      message: "",
    });
  };

  return (
    <div className="product-page">
      {/* HERO */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-7">
            <span className="badge bg-success mb-3">
              12–15 सालों से लोगों की सेवा में
            </span>

            <h1 className="display-5 fw-bold">
              Haddi Jhod Herbal Davai <br />
              <span className="text-success">हड्डी जोड़ जड़ी-बूटी</span>
            </h1>

            <p className="lead mt-3">
              100% प्राकृतिक जड़ी-बूटी आधारित दवाई, जिसे पारंपरिक तरीके से
              तैयार किया जाता है। यह 3 दिन का कोर्स है।
            </p>

            <p>
              This is a pure herbal davai prepared by a farmer family using a
              traditional method, with no chemicals or artificial additives.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="#order"
                className="btn btn-success btn-lg"
              >
                Order Now - ₹{price}
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success btn-lg"
              >
                WhatsApp करें
              </a>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow border-0">
              <div className="card-body text-center p-4">
                <h3>₹{price}</h3>
                <p className="mb-1">Complete 3-Day Course</p>
                <p className="text-success fw-bold mb-1">
                  Free Delivery Included
                </p>
                <p className="text-muted mb-0">All India Delivery: 3–6 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="container pb-4">
        <div className="row g-3 text-center">
          {[
            "100% Herbal",
            "Farmer Family",
            "12–15 Years Trust",
            "All India Delivery",
            "Free Delivery",
          ].map((item) => (
            <div className="col-6 col-md" key={item}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body fw-bold">✅ {item}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="container py-5">
        <h2>About Us / हमारे बारे में</h2>
        <p>
          We are <strong>Kuldeep Singh and Bhupendra Singh</strong>, a farmer
          family from <strong>Gangda, Harda / Agar Malwa, Madhya Pradesh</strong>.
        </p>
        <p>
          पिछले 12–15 सालों से हम लोगों को यह पारंपरिक जड़ी-बूटी आधारित दवाई
          सीधे देते आ रहे हैं। पहले हम इसे सेवा भाव से लोगों को देते थे, लेकिन
          कई लोगों को गांव तक आने में परेशानी होती थी।
        </p>
        <p>
          इसलिए हमने यह वेबसाइट शुरू की है ताकि जरूरतमंद लोग पूरे भारत में इसे
          आसानी से अपने घर मंगवा सकें।
        </p>
      </section>

      {/* ABOUT PRODUCT */}
      <section className="bg-light py-5">
        <div className="container">
          <h2>About Davai / दवाई के बारे में</h2>
          <p>
            यह एक शुद्ध जड़ी-बूटी आधारित दवाई है, जिसे पारंपरिक तरीके से तैयार
            किया जाता है।
          </p>

          <ul>
            <li>एक ही शुद्ध जड़ी-बूटी से तैयार</li>
            <li>कोई केमिकल या artificial additive नहीं</li>
            <li>जड़ी-बूटी को साफ करके छोटे टुकड़ों में तैयार किया जाता है</li>
            <li>फिर इसे 2–3 बार बारीक किया जाता है</li>
          </ul>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="container py-5">
        <h2>How to Use / सेवन विधि</h2>
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <ol>
              <li>दवाई को 3 बराबर हिस्सों में बांट लें।</li>
              <li>हर हिस्से को गुड़ के साथ मिलाकर लें।</li>
              <li>रोज़ सुबह खाली पेट एक बार सेवन करें।</li>
              <li>सेवन के बाद 1 घंटे तक कुछ न खाएं-पिएं।</li>
              <li>यह पूरा 3 दिन का कोर्स है।</li>
            </ol>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2>Benefits / फायदे</h2>
          <div className="row g-3">
            {[
              "Fracture और bone recovery support",
              "जोड़ों के दर्द में राहत",
              "सूजन और discomfort में सहायता",
              "नस दबने जैसी समस्या में support",
              "Sciatica में राहत का अनुभव",
              "Body की natural healing को support",
            ].map((benefit) => (
              <div className="col-md-4" key={benefit}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">🌿 {benefit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="container py-5">
        <h2>What to Expect / क्या अनुभव हो सकता है?</h2>
        <p>
          कुछ users को सेवन के कुछ घंटों में आराम या हल्कापन महसूस हो सकता है।
          3 दिन का कोर्स पूरा करने के बाद धीरे-धीरे improvement महसूस हो सकता
          है।
        </p>
        <p className="text-muted">
          Results व्यक्ति की condition और body response पर depend करते हैं।
        </p>
      </section>

      {/* REAL STORIES */}
      <section className="bg-light py-5">
        <div className="container">
          <h2>Real Patient Experiences / वास्तविक अनुभव</h2>

          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5>Fracture + Metal Rod Case</h5>
                  <p>
                    एक patient जिनके पैर में operation के बाद metal rod लगी थी,
                    3 साल बाद भी ठीक से चल नहीं पा रहे थे। हमारे गांव आकर
                    उन्होंने यह 3 दिन का कोर्स लिया।
                  </p>
                  <p>
                    उनके अनुभव के अनुसार, कुछ घंटों में relief महसूस हुआ और
                    अगले दिनों में condition में अच्छा improvement दिखा।
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5>Bone-Related Infection Case</h5>
                  <p>
                    एक patient bone-related infection से परेशान थे और surgery
                    पर विचार किया जा रहा था। उन्होंने यह 3 दिन का कोर्स लिया।
                  </p>
                  <p>
                    उनके अनुभव के अनुसार, course complete करने के बाद discomfort
                    कम हुआ और condition में improvement महसूस हुआ।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted mt-3">
            Note: ये real experiences हैं। Results हर व्यक्ति में अलग हो सकते हैं।
          </p>
        </div>
      </section>

      
     

      {/* FAQ */}
      <section className="container py-5">
        <h2>FAQ / सामान्य प्रश्न</h2>

        <div className="accordion" id="faqAccordion">
          {[
            {
              q: "यह कितने दिन का course है?",
              a: "यह 3 दिन का course है। दवाई को 3 बराबर हिस्सों में लेकर रोज़ एक बार खाली पेट लेना है।",
            },
            {
              q: "Delivery कितने दिन में होगी?",
              a: "All India delivery 3–6 days में होती है।",
            },
            {
              q: "क्या COD available है?",
              a: "नहीं, अभी Cash on Delivery available नहीं है। UPI payment accepted है।",
            },
            {
              q: "क्या पहले WhatsApp पर बात कर सकते हैं?",
              a: "हाँ, आप order से पहले WhatsApp या call करके पूरी जानकारी ले सकते हैं।",
            },
          ].map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  {item.q}
                </button>
              </h2>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="container pb-5">
        <div className="alert alert-warning">
          <strong>Disclaimer:</strong> यह एक पारंपरिक herbal davai है। यह doctor
          treatment का substitute नहीं है। Serious medical condition में qualified
          doctor से सलाह जरूर लें। Results person to person vary कर सकते हैं।
        </div>
      </section>

      {/* STICKY WHATSAPP */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="btn btn-success position-fixed"
        style={{
          right: "20px",
          bottom: "20px",
          zIndex: 9999,
          borderRadius: "50px",
          padding: "12px 18px",
        }}
      >
        WhatsApp
      </a>
    </div>
  );
};

export default Product;