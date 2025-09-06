import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";

const TypedText = () => {
    const { t } = useTranslation();
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: [
            t("index.hero.typedText.professionalWeighingSolutions"),
          t("index.hero.typedText.trustedIndustrialPartner"), 
          t("index.hero.typedText.innovatingSince1994")
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return <span ref={el} className="text-foreground" />;
};

export default TypedText;