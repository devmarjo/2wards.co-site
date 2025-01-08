// import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";
import way from "../assets/way.png";
import wayDark from "../assets/way-dark.png";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";

export const About = () => {
  const {theme} = useTheme()
  const { t } = useTranslation()
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={theme !== 'dark' ? way : wayDark }
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {t("About")}{" "}
                </span>
                {t("Company")}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <p>{t("AboutCompantText1")}</p><br />
                <p>{t("AboutCompantText2")}</p><br />
                <p>{t("AboutCompantText3")}</p><br />
                <p>{t("AboutCompantText4")}</p><br />
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
