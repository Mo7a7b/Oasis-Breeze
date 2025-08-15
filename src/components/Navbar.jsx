import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";

// Language select button styled to match the app's theme
function LanguageSelect() {
  const { i18n: i18next } = useTranslation();
  const current = i18next.language;
  return (
    <select
      value={current}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-black/50 text-white border border-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      style={{ minWidth: 80 }}
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="it">Italian</option>
      <option value="fr">French</option>
      <option value="pt">Portuguese</option>
      <option value="de">German</option>
    </select>
  );
}

const Navbar = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" />
          <p>{t("navbar.brand")}</p>
        </a>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav-link">
                {t(`navbar.${link.id}`)}
              </a>
            </li>
          ))}
          <li>
            <LanguageSelect />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
