import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between fw-bolder">
          {/* Logo + Name */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-extrabold">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">ICTCO</div>
              <div className="text-xs text-muted-foreground">{t("est")}</div>
            </div>
          </NavLink>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary transition-colors font-bold"
              }
            >
              {t("Home")}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary transition-colors font-bold"
              }
            >
              {t("Products")}
            </NavLink>

            <NavLink
              to="/software"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary transition-colors font-bold"
              }
            >
              {t("Software")}
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary transition-colors font-bold"
              }
            >
              {t("Gallery")}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-foreground hover:text-primary transition-colors font-bold"
              }
            >
              {t("contact.title")}
            </NavLink>
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleLang}>
              🌐 {i18n.language === "en" ? "عربي" : "EN"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
