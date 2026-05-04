import React, { useState } from "react";

const Product = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    mobile: "",
    rating: "5",
    message: "",
  });

  const whatsappNumber = "919399968513";
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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="card shadow-lg border-0 p-4 p-md-5 h-100">
                <span className="badge bg-success mb-3 align-self-start">
                  12–15 सालों से लोगों की सेवा में
                </span>

                <h1 className="fw-bold display-5 mb-3">
                  Haddi Jhod Herbal Davai
                  <br />
                  <span className="text-success">हड्डी जोड़ जड़ी-बूटी</span>
                </h1>

                <p className="lead text-muted">
                  100% प्राकृतिक जड़ी-बूटी आधारित दवाई, जिसे पारंपरिक तरीके से
                  तैयार किया जाता है। यह 3 दिन का कोर्स है।
                </p>

                <p className="text-muted">
                  This is a pure herbal davai prepared by a farmer family using
                  a traditional method, with no chemicals or artificial additives.
                </p>

                <div className="row g-2 my-4">
                  <div className="col-6 col-md-3">
                    <div className="border rounded-4 p-3 text-center h-100">
                      🌿 <br />
                      <strong>100% Herbal</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="border rounded-4 p-3 text-center h-100">
                      🚫 <br />
                      <strong>No Chemicals</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="border rounded-4 p-3 text-center h-100">
                      📦 <br />
                      <strong>3-Day Course</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="border rounded-4 p-3 text-center h-100">
                      🚚 <br />
                      <strong>Free Delivery</strong>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3 mt-2">
                  <button
                    onClick={() => (window.location.href = "/order")}
                    className="btn btn-success btn-lg"
                  >
                    Order Now - ₹{price}
                  </button>

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
            </div>

            <div className="col-lg-5">
              <div className="card shadow-lg border-0 p-4 text-center h-100">
                <div className="display-6 mb-2">🌿</div>
                <h2 className="text-success fw-bold">₹{price}</h2>
                <p className="mb-1 fw-bold">Complete 3-Day Course</p>
                <p className="text-success fw-bold mb-1">
                  Free Delivery Included
                </p>
                <p className="text-muted mb-3">All India Delivery: 3–6 Days</p>

                <div className="alert alert-success mb-0">
                  No COD • UPI Payment Accepted
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="container py-4">
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

      {/* ABOUT PRODUCT */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-success mb-2">Pure Herbal Davai</span>
            <h2 className="fw-bold">About Davai / दवाई के बारे में</h2>
          </div>

          <div className="card shadow-lg border-0 p-4 p-md-5">
            <p className="lead text-muted">
              यह एक शुद्ध जड़ी-बूटी आधारित दवाई है, जिसे पारंपरिक तरीके से
              तैयार किया जाता है।
            </p>

            <div className="row g-3 mt-3">
              {[
                "एक ही शुद्ध जड़ी-बूटी से तैयार",
                "कोई केमिकल या artificial additive नहीं",
                "जड़ी-बूटी को साफ करके छोटे टुकड़ों में तैयार किया जाता है",
                "फिर इसे 2–3 बार बारीक किया जाता है",
              ].map((item) => (
                <div className="col-md-6" key={item}>
                  <div className="border rounded-4 p-3 h-100">✔ {item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="badge bg-success mb-2">3-Day Course</span>
          <h2 className="fw-bold">How to Use / सेवन विधि</h2>
        </div>

        <div className="row g-4">
          {[
            "दवाई को 3 बराबर हिस्सों में बांट लें।",
            "हर हिस्से को गुड़ के साथ मिलाकर लें।",
            "रोज़ सुबह खाली पेट एक बार सेवन करें।",
            "सेवन के बाद 1 घंटे तक कुछ न खाएं-पिएं।",
            "यह पूरा 3 दिन का कोर्स है।",
          ].map((step, index) => (
            <div className="col-md-6 col-lg-4" key={step}>
              <div className="card shadow-lg border-0 h-100 p-3">
                <div className="card-body">
                  <div className="badge bg-success mb-3">Step {index + 1}</div>
                  <p className="mb-0 fw-semibold">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-success mb-2">Traditional Support</span>
            <h2 className="fw-bold">Benefits / फायदे</h2>
          </div>

          <div className="row g-4">
            {[
              "Fracture और bone recovery support",
              "जोड़ों के दर्द में राहत",
              "सूजन और discomfort में सहायता",
              "नस दबने जैसी समस्या में support",
              "Sciatica में राहत का अनुभव",
              "Body की natural healing को support",
            ].map((benefit) => (
              <div className="col-md-6 col-lg-4" key={benefit}>
                <div className="card h-100 shadow-lg border-0 p-3">
                  <div className="card-body">
                    <div className="fs-3 mb-2">🌿</div>
                    <p className="mb-0 fw-semibold">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="container py-5">
        <div className="card shadow-lg border-0 p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-md-8">
              <h2 className="fw-bold mb-3">
                What to Expect / क्या अनुभव हो सकता है?
              </h2>
              <p className="lead text-muted">
                कुछ users को सेवन के कुछ घंटों में आराम या हल्कापन महसूस हो
                सकता है। 3 दिन का कोर्स पूरा करने के बाद धीरे-धीरे improvement
                महसूस हो सकता है।
              </p>
              <p className="text-muted mb-0">
                Results व्यक्ति की condition और body response पर depend करते हैं।
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="display-1">⏱️</div>
              <h5 className="text-success fw-bold">Early Relief Support</h5>
            </div>
          </div>
        </div>
      </section>

      {/* REAL STORIES */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-success mb-2">Real Experiences</span>
            <h2 className="fw-bold">
              Real Patient Experiences / वास्तविक अनुभव
            </h2>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0 p-3">
                <div className="card-body">
                  <div className="fs-2 mb-2">🦴</div>
                  <h5 className="fw-bold">Fracture + Metal Rod Case</h5>
                  <p className="text-muted">
                    एक patient जिनके पैर में operation के बाद metal rod लगी थी,
                    3 साल बाद भी ठीक से चल नहीं पा रहे थे। हमारे गांव आकर
                    उन्होंने यह 3 दिन का कोर्स लिया।
                  </p>
                  <p className="mb-0">
                    उनके अनुभव के अनुसार, कुछ घंटों में relief महसूस हुआ और
                    अगले दिनों में condition में अच्छा improvement दिखा।
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0 p-3">
                <div className="card-body">
                  <div className="fs-2 mb-2">🌿</div>
                  <h5 className="fw-bold">Bone-Related Infection Case</h5>
                  <p className="text-muted">
                    एक patient bone-related infection से परेशान थे और surgery
                    पर विचार किया जा रहा था। उन्होंने यह 3 दिन का कोर्स लिया।
                  </p>
                  <p className="mb-0">
                    उनके अनुभव के अनुसार, course complete करने के बाद discomfort
                    कम हुआ और condition में improvement महसूस हुआ।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted mt-3 text-center">
            Note: ये real experiences हैं। Results हर व्यक्ति में अलग हो सकते हैं।
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <span className="badge bg-success mb-2">Questions</span>
          <h2 className="fw-bold">FAQ / सामान्य प्रश्न</h2>
        </div>

        <div className="accordion shadow rounded-4 overflow-hidden" id="faqAccordion">
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
            <div className="accordion-item border-0" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button fw-bold ${
                    index !== 0 ? "collapsed" : ""
                  }`}
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
        <div className="alert alert-warning shadow-sm rounded-4">
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
        className="btn btn-success position-fixed d-none d-md-inline-block"
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