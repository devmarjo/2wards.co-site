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
import imageBarbering from "../assets/courses/BARBERING.png";
import imageHairdressing from "../assets/courses/HAIRDRESSING.png";
import imageFacial from "../assets/courses/FACIAL.png";
import imageMassage from "../assets/courses/MASSAGE.png";
import imageEyelash from "../assets/courses/EYELASH.png";
import imageNail from "../assets/courses/NAIL.png";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { EmailButton } from "./EmailButton";
import { PhonelButton } from "./PhoneButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { InstagramButton } from "./InstagramButton";

interface FeatureProps {
  title: string;
  heading: string;
  description: string;
  completeDescription: string;
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

//   Courses
//    Education
//     "Level 3 Certificate in Assessing Vocational Achievement",
//     "Level 4 Award in the IQA of Assessment Processes and Practices"
//     "Level 3 Award in Education and Training",


//     "Level 2 Certificate in Barbering"
//     "Level 2 Certificate in Women s Hairdressing"
//     "Level 2 Diploma for Beauty Therapists"
//     "Level 2 Award in Facial Skincare Treatments"
//     "Level 2 Award in Body Massage Treatments"
//     "Level 3 Award in Eyelash Extension Application"
//     "Level 3 Certificate in Teaching and Training"
//     "Level 3 Diploma in Beauty Therapy Treatments"
//    ]

  const { t } = useTranslation()
  const features: FeatureProps[] = [
    {
      title: "Assessor courses",
      heading: "Level 3 Certificate in Assessing Vocational Achievement",
      description: t('courses.assessor.description'),
      completeDescription: t('courses.assessor.completeDescription'),
      image: imageAssessor,
    },
    {
      title: "IQA courses",
      heading: "Level 4 Award in the IQA of Assessment Processes and Practices",
      description: t('courses.IQA.description'),
      completeDescription: t('courses.IQA.completeDescription'),
      image: imageIQA,
    },
    {
      title: "Trainer courses",
      heading: "Level 3 Award in Education and Training and Level 3 Certificate in Teaching and Training",
      description: t('courses.teachingAndTrainingGroup.description'),
      completeDescription: t('courses.teachingAndTrainingGroup.completeDescription'),
      image: imageTrainer,
    },
    {
      title: "Barbering courses",
      heading: "Level 2 Certificate in Barbering",
      description: t('courses.barbering.description'),
      completeDescription: t('courses.barbering.completeDescription'),
      image: imageBarbering,
    },
    {
      title: "Hairdressing courses",
      heading: "Level 2 Certificate in Women s Hairdressing",
      description: t('courses.womensHairdressing.description'),
      completeDescription: t('courses.womensHairdressing.completeDescription'),
      image: imageHairdressing,
    },
    {
      title: "Nail courses",
      heading: "Level 2 Certificate in Enhancement Service Nail Enhancement Services",
      description: t('courses.nailEnhancementServices.description'),
      completeDescription: t('courses.nailEnhancementServices.completeDescription'),
      image: imageNail,
    },
    {
      title: "Beauty Therapists courses",
      heading: "Level 2 Award in Facial Skincare Treatments, Level 2 Diploma for Beauty Therapists and Level 3 Diploma in Beauty Therapy Treatments",
      description: t('courses.beautyTherapyGroup.description'),
      completeDescription: t('courses.beautyTherapyGroup.completeDescription'),
      image: imageFacial,
    },
    {
      title: "Massage courses",
      heading: "Level 2 Award in Body Massage Treatments",
      description: t('courses.bodyMassage.description'),
      completeDescription: t('courses.bodyMassage.completeDescription'),
      image: imageMassage,
    },
    {
      title: "Eyelash courses",
      heading: "Level 3 Award in Eyelash Extension Application",
      description: t('courses.eyelashExtension.description'),
      completeDescription: t('courses.eyelashExtension.completeDescription'),
      image: imageEyelash,
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
        {features.map(({ title, heading, description, image, completeDescription }: FeatureProps) => (
          <Dialog>
            <DialogTrigger>
              <Card key={title} className="h-full  cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary">
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
            </DialogTrigger>
            <DialogContent className="w-[80vw] min-w-[300px] max-w-[1080px]">
              <DialogHeader>
                <DialogTitle className="text-4xl">{title}</DialogTitle>
                <DialogDescription>

                  <img
                    src={image}
                    alt="About feature"
                    className="w-[200px] lg:w-[300px] mx-auto my-10"
                  />
                  <div className="text-black dark:text-primary text-xl m-5 ">
                    {completeDescription.split('\b').map(e => <p className="pt-2" style={{textIndent: "2em"}}>{e}</p> )}
                  </div>
                  <div className="m-auto max-w-[320px] grid gap-4 my-4">
                    <EmailButton/>
                    <PhonelButton/>
                    <WhatsAppButton />
                    <InstagramButton />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
