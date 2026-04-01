import React, { useEffect } from "react";

function GoogleTranslate() {

  useEffect(() => {
    // agar already load ho chuka hai to dobara mat karo
    if (window.google && window.google.translate) {
      return;
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    };

    // script check karo
    if (!document.getElementById("google-script")) {
      const script = document.createElement("script");
      script.id = "google-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;