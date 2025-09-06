import { useEffect } from "react";
import { WOW } from "wowjs"; // 👈 import as named, not default

const WowInit = () => {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return null;
};

export default WowInit;
