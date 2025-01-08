import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import step1 from '@/assets/steps/1.png'
import step1Dark from '@/assets/steps/1-dark.png'
import step2 from '@/assets/steps/2.png'
import step2Dark from '@/assets/steps/2-dark.png'
import step3 from '@/assets/steps/3.png'
import step3Dark from '@/assets/steps/3-dark.png'
import step4 from '@/assets/steps/4.png'
import step4Dark from '@/assets/steps/4-dark.png'

import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";

interface FeatureProps {
  image: string,
  imageDark: string,
  title: string;
  description: string;
}


export const HowItWorks = () => {
  const { t } = useTranslation()
  const features: FeatureProps[] = [
    {
      image: step1,
      imageDark: step1Dark,
      title: t('step1title'),
      description: t('step1description'),
    },
    {
      image: step2,
      imageDark: step2Dark,
      title: t('step2title'),
      description: t('step2description'),
    },
    {
      image: step3,
      imageDark: step3Dark,
      title: t('step3title'),
      description: t('step3description'),
    },
    {
      image: step4,
      imageDark: step4Dark,
      title: t('step4title'),
      description: t('step4description'),
    },
  ];
  const {theme} = useTheme()
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        {t('Step-by-Step Guide')}
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit! */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ image, imageDark, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <img src={theme !== 'dark' ? image : imageDark } width={"100%"} />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
