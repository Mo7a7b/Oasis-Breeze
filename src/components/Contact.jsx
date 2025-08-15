import { socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>{t("contact.where")}</h2>

        <div>
          <h3>{t("contact.visit")}</h3>
          <p>{t("contact.address")}</p>
        </div>

        <div>
          <h3>{t("contact.contactUs")}</h3>
          <p>{t("contact.phone")}</p>
          <p>{t("contact.email")}</p>
        </div>

        <div>
          <h3>{t("contact.open")}</h3>
          {t("contact.openingHours", { returnObjects: true }).map(
            (time, idx) => (
              <p key={idx}>
                {time.day} : {time.time}
              </p>
            )
          )}
        </div>

        <div>
          <h3>{t("contact.socials")}</h3>

          <div className="flex-center gap-5">
            {socials.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(`contact.socialNames.${idx}`)}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <img className="drink-img" src="/images/footer-drinks.png" alt="" />
    </footer>
  );
};

export default Contact;
