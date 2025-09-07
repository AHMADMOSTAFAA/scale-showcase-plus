import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";

const TypedText = () => {
  const { t, i18n } = useTranslation();
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const initTyped = () => {
      if (!el.current) return;

      typed.current?.destroy(); // destroy previous instance if exists

      typed.current = new Typed(el.current, {
        strings: [
          t("index.hero.typedText.professionalWeighingSolutions"),
          t("index.hero.typedText.trustedIndustrialPartner"),
          t("index.hero.typedText.innovatingSince1994"),
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });
    };

    initTyped(); // initialize for current language

    const handleLanguageChange = () => {
      initTyped(); // re-initialize Typed.js when language changes
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      typed.current?.destroy();
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, t]); // add i18n and t to dependencies

  return <span ref={el} className="text-foreground" />;
};

export default TypedText;
