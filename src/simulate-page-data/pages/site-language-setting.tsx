// pages/SiteLanguageSettingPage.tsx
import { useSPAHooks } from "@/spa/hook";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

const SiteLanguageSettingPage: React.FC = () => {
  const { getRouteParams } = useSPAHooks();
  const { params } = getRouteParams();
  const { siteCode } = params;
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const languages: LanguageOption[] = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
    { code: "zh", name: "Chinese", nativeName: "中文" },
  ];

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert(
        `Language updated to ${
          languages.find((l) => l.code === selectedLanguage)?.name
        } for site: ${siteCode}`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="site-language-setting-page">
      <div className="page-header">
        <button onClick={() => window.history.back()} className="back-button">
          ← Back to Settings
        </button>
        <h1>Language Settings for Site: {siteCode}</h1>
      </div>

      <div className="language-settings">
        <div className="current-site-info">
          <h2>Site Information</h2>
          <p>
            <strong>Site Code:</strong> {siteCode}
          </p>
          <p>
            <strong>Current Language:</strong>{" "}
            {languages.find((l) => l.code === selectedLanguage)?.name}
          </p>
        </div>

        <div className="language-selector">
          <h2>Select Language</h2>
          <div className="language-options">
            {languages.map((language) => (
              <label key={language.code} className="language-option">
                <input
                  type="radio"
                  name="language"
                  value={language.code}
                  checked={selectedLanguage === language.code}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <div className="language-info">
                  <span className="language-name">{language.name}</span>
                  <span className="language-native">{language.nativeName}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="language-preview">
          <h2>Preview</h2>
          <div className="preview-box">
            <p>Sample text in {languages.find((l) => l.code === selectedLanguage)?.name}</p>
            <p className="preview-text">
              {selectedLanguage === "es" && "Hola, bienvenido a nuestro sitio web."}
              {selectedLanguage === "fr" && "Bonjour, bienvenue sur notre site web."}
              {selectedLanguage === "de" && "Hallo, willkommen auf unserer Website."}
              {selectedLanguage === "ja" && "こんにちは、私たちのウェブサイトへようこそ。"}
              {selectedLanguage === "zh" && "你好，欢迎来到我们的网站。"}
              {selectedLanguage === "en" && "Hello, welcome to our website."}
            </p>
          </div>
        </div>

        <div className="actions">
          <button onClick={handleSave} disabled={loading} className="save-button">
            {loading ? "Saving..." : "Save Language Settings"}
          </button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SiteLanguageSettingPage;
