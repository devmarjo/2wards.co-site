import { useTranslation } from "react-i18next";
import { ContactButton } from "./ContactButton";

export const Cta = () => {
  const {t} = useTranslation()
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            {t('Not Sure Where to Start?')}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              <br />
              {t('We’re Here to Help!')}{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {t('ourExperts')}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
