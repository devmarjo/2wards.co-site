// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imageAssessor from "../assets/courses/assessor.png";
import imageIQA from "../assets/courses/IQA.png";
import imageTrainer from "../assets/courses/trainer.png";
import { useTranslation } from "react-i18next";

interface FeatureProps {
  title: string;
  heading: string;
  description: string;
  image: string;
}



// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const Features = () => {


  const { t } = useTranslation()
  const features: FeatureProps[] = [
    {
      title: "Assessor courses",
      heading: "Level 3 Certificate in Assessing Vocational Achievement (CAVA)",
      description: t('courses.assessor.description'),
      image: imageAssessor,
    },
    {
      title: "IQA courses",
      heading: "Level 4 Award in the Internal Quality Assurance of Assessment Processes and Practice (IQA)",
      description: t('courses.IQA.description'),
      image: imageIQA,
    },
    {
      title: "Trainer courses",
      heading: "Level 3 Award in Education and Training (AET)",
      description: t('courses.Trainer.description'),
      image: imageTrainer,
    },
  ];

  return (
    <section
      id="training"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Training
      </h2>
{/* 
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, heading, description, image }: FeatureProps) => (
          <Card key={title} className="cursor-pointer">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <b>{heading}</b>

              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardContent>
            
            <CardFooter>
              {description}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
