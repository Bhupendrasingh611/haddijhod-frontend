import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerGaavSeva } from "../../api/gaavSevaApi";
import "./GaavSeva.css";

const initialFormData = {
  name: "",
  mobile: "",
  village: "",
  age: "",
  problemType: "",
  visitDate: "",
  quantity: "1",
  firstTime: "",
  description: "",
};

const problemOptions = [
  "हड्डी फ्रैक्चर",
  "लिगामेंट समस्या",
  "रीढ़ की हड्डी से संबंधित समस्या",
  "हाथ/पैर की हड्डी समस्या",
  "अन्य",
];

const GaavSeva = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      village: formData.village,
      age: formData.age ? Number(formData.age) : null,
      problemType: formData.problemType,
      visitDate: formData.visitDate || null,
      quantity: formData.quantity ? Number(formData.quantity) : 1,
      firstTime: formData.firstTime || null,
      description: formData.description || null,
    };

    const response = await registerGaavSeva(payload);

    if (response.data.success) {
      const savedData = response.data.data;

      setFormData(initialFormData);

      navigate("/gaav-seva-success", {
        state: {
          registrationId: savedData.registrationId,
          name: savedData.name,
          mobile: savedData.mobile,
          village: savedData.village,
        },
      });
    } else {
      alert(response.data.message || "पंजीकरण में समस्या आई।");
    }
  } catch (error) {
    console.error("गांव सेवा पंजीकरण error:", error);

    alert(
      error.response?.data?.message ||
        "पंजीकरण नहीं हो पाया। कृपया थोड़ी देर बाद फिर कोशिश करें।"
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="gaav-seva-page">
      <section className="gaav-seva-hero">
        <div className="gaav-seva-container">
          <div className="gaav-seva-hero-card">
            <div className="gaav-seva-hero-content">
              <span className="gaav-seva-badge">सेवा भाव से सहायता</span>

              <h1>गांव सेवा पंजीकरण</h1>

              <p>
                हमारे गांव और आसपास के क्षेत्र से जो भी व्यक्ति हमारे घर/स्थानीय
                केंद्र पर हड्डीजोड़ औषधि लेने आते हैं, उन्हें सेवा भाव से औषधि
                निःशुल्क दी जाती है।
              </p>

              <div className="gaav-seva-hero-actions">
                <a href="#seva-form" className="gaav-seva-primary-btn">
                  पंजीकरण करें
                </a>

                <a href="tel:9399968513" className="gaav-seva-secondary-btn">
                  संपर्क करें
                </a>
              </div>
            </div>

            <div className="gaav-seva-hero-info">
              <div className="gaav-seva-info-item">
                <strong>01</strong>
                <span>पहले पंजीकरण करें</span>
              </div>

              <div className="gaav-seva-info-item">
                <strong>02</strong>
                <span>स्थानीय पते पर आएं</span>
              </div>

              <div className="gaav-seva-info-item">
                <strong>03</strong>
                <span>नाम और मोबाइल नंबर बताएं</span>
              </div>

              <div className="gaav-seva-info-item">
                <strong>04</strong>
                <span>सेवा भाव से औषधि प्राप्त करें</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gaav-seva-intro">
        <div className="gaav-seva-container">
          <div className="gaav-seva-intro-grid">
            <div className="gaav-seva-about-card">
              <span className="gaav-seva-section-label">गांव सेवा</span>

              <h2>यह सेवा किसके लिए है?</h2>

              <p>
                गांव सेवा उन लोगों के लिए है जो हमारे घर/स्थानीय केंद्र पर आकर
                हड्डीजोड़ औषधि लेना चाहते हैं। ऐसे लोगों को सेवा भाव से औषधि
                निःशुल्क उपलब्ध कराई जाती है।
              </p>

              <p>
                पंजीकरण का उद्देश्य केवल रिकॉर्ड सुरक्षित रखना और आने वाले लोगों
                को बेहतर सेवा देना है।
              </p>
            </div>

            <div className="gaav-seva-note-card">
              <h3>जरूरी नोट</h3>

              <p>
                गांव सेवा केवल हमारे घर/स्थानीय केंद्र पर आकर औषधि लेने वाले
                लोगों के लिए है। ऑनलाइन ऑर्डर, कूरियर या डिलीवरी के लिए वेबसाइट
                पर दिए गए सामान्य शुल्क लागू होंगे।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gaav-seva-form-section" id="seva-form">
        <div className="gaav-seva-container">
          <div className="gaav-seva-form-layout">
            <aside className="gaav-seva-side-panel">
              <span className="gaav-seva-section-label">स्थानीय जानकारी</span>

              <h2>पंजीकरण के बाद क्या करें?</h2>

              <div className="gaav-seva-step-list">
                <div>
                  <span>1</span>
                  <p>फॉर्म में सही जानकारी भरें।</p>
                </div>

                <div>
                  <span>2</span>
                  <p>हमारे स्थानीय पते पर आएं।</p>
                </div>

                <div>
                  <span>3</span>
                  <p>आते समय अपना नाम और मोबाइल नंबर बताएं।</p>
                </div>

                <div>
                  <span>4</span>
                  <p>सेवा भाव से औषधि प्राप्त करें।</p>
                </div>
              </div>

              <div className="gaav-seva-address-card">
                <h3>स्थानीय पता</h3>
                <p>गांगड़ा हड्डा, आगर मालवा</p>

                <h3>संपर्क</h3>
                <p>
                  <a href="tel:9399968513">9399968513</a>
                  <span> / </span>
                  <a href="tel:8120282859">8120282859</a>
                </p>
              </div>
            </aside>

            <div className="gaav-seva-form-card">
              <div className="gaav-seva-form-header">
                <span className="gaav-seva-section-label">
                  पंजीकरण फॉर्म
                </span>

                <h2>अपनी जानकारी भरें</h2>

                <p>
                  कृपया सही जानकारी भरें, ताकि आपका रिकॉर्ड सुरक्षित रहे।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="gaav-seva-form">
                <div className="gaav-seva-field">
                  <label>
                    नाम <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="अपना नाम लिखें"
                    required
                  />
                </div>

                <div className="gaav-seva-field">
                  <label>
                    मोबाइल नंबर <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="मोबाइल नंबर लिखें"
                    maxLength="10"
                    required
                  />
                </div>

                <div className="gaav-seva-field">
                  <label>
                    गांव / शहर <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    placeholder="गांव या शहर का नाम"
                    required
                  />
                </div>

                <div className="gaav-seva-form-row">
                  <div className="gaav-seva-field">
                    <label>मरीज की उम्र</label>

                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="उम्र"
                      min="1"
                    />
                  </div>

                  <div className="gaav-seva-field">
                    <label>कितनी मात्रा चाहिए?</label>

                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="gaav-seva-field">
                  <label>
                    समस्या का प्रकार <span>*</span>
                  </label>

                  <select
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">समस्या चुनें</option>

                    {problemOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="gaav-seva-form-row">
                  <div className="gaav-seva-field">
                    <label>कब आना चाहते हैं?</label>

                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="gaav-seva-field">
                    <label>क्या आप पहली बार ले रहे हैं?</label>

                    <select
                      name="firstTime"
                      value={formData.firstTime}
                      onChange={handleChange}
                    >
                      <option value="">चुनें</option>
                      <option value="हाँ">हाँ</option>
                      <option value="नहीं">नहीं</option>
                    </select>
                  </div>
                </div>

                <div className="gaav-seva-field">
                  <label>अतिरिक्त जानकारी</label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="समस्या के बारे में कुछ लिखना चाहें तो लिखें"
                    rows="4"
                  />
                </div>

                <button
  type="submit"
  className="gaav-seva-submit-btn"
  disabled={isSubmitting}
>
  {isSubmitting ? "पंजीकरण हो रहा है..." : "पंजीकरण करें"}
</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="gaav-seva-faq-section">
        <div className="gaav-seva-container">
          <div className="gaav-seva-faq-header">
            <span className="gaav-seva-section-label">सवाल-जवाब</span>
            <h2>अक्सर पूछे जाने वाले सवाल</h2>
          </div>

          <div className="gaav-seva-faq-grid">
            <div className="gaav-seva-faq-card">
              <h3>क्या गांव सेवा में औषधि निःशुल्क मिलती है?</h3>
              <p>
                हाँ, जो व्यक्ति हमारे घर/स्थानीय केंद्र पर आते हैं, उन्हें सेवा
                भाव से औषधि निःशुल्क दी जाती है।
              </p>
            </div>

            <div className="gaav-seva-faq-card">
              <h3>क्या कूरियर से भी निःशुल्क भेजी जाएगी?</h3>
              <p>
                नहीं, गांव सेवा केवल स्थानीय पते पर आकर लेने वालों के लिए है।
                ऑनलाइन ऑर्डर या डिलीवरी पर सामान्य शुल्क लागू होंगे।
              </p>
            </div>

            <div className="gaav-seva-faq-card">
              <h3>क्या पंजीकरण जरूरी है?</h3>
              <p>
                हाँ, रिकॉर्ड और बेहतर सेवा के लिए पंजीकरण जरूरी है। इससे हमें
                जानकारी रहती है कि कौन व्यक्ति कब आया और किस समस्या के लिए औषधि
                ली।
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GaavSeva;