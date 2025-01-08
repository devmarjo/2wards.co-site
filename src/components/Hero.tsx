// import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import rocketGif from "@/assets/rocket.gif"

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#1F822E] dark:from-[#30b852] to-[#30b852] dark:to-[#daffda] text-transparent bg-clip-text ">
              2WARDS
            </span>
            {" "}
          </h1>{" "}
            {t('h2Homepage')} {" "}
          <h2 className="inline">
            <span className="gap-2 inline bg-gradient-to-r  from-[#1F822E] dark:from-[#30b852] to-[#30b852] dark:to-[#daffda] text-transparent bg-clip-text">
              {t('successfulBusiness')} {" "}
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          {t('h3homepage')}
        </p>

        {/* <div className="flex justify-end space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">{t('Get Started')}</Button>
        </div> */}
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}
    <div style={{ position: 'relative', padding:30, maxWidth: '100vw' }}>
        <img src={rocketGif} width={300} />
        {/* Shadow effect */}
        <div className="shadow"></div>
      </div>
    </section>
  );
};
