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
import { useCourses, groupCoursesI, CategoryI } from "@/lib/useCourses";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";

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
  const { groupedCourses } = useCourses()

  return (
    <section
      id="training"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {t('Training')}
      </h2>
      <Tabs className="w-[100%]" defaultValue={CategoryI.Education}>
        <TabsList  className="grid w-full flex flex-row mb-10">
          {Object.values(CategoryI).map((category) => (
            <TabsTrigger className="min-w-100px grow" value={`${category}`}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {Object.values(CategoryI).map((category) => (
          <TabsContent value={`${category}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedCourses.filter(el => el.category === category).map(({ group, courses, description, image }, index) => (
                <Dialog>
                  <DialogTrigger>
                    <Card key={category+String(index)} className="h-full  cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary">
                      <CardHeader>
                        <CardTitle>{group}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={image}
                          alt="About feature"
                          className="w-[200px] lg:w-[300px] mx-auto"
                        />
                        <p className="pt-10">
                          {description}
                        </p>
                      </CardContent>
                      <CardFooter className="grid">
                        {courses.map((course) => (
                          <div className="" key={course.courseKey}>
                            <b>{course.heading}</b>
                          </div>
                        ))}
                      </CardFooter>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="w-[80vw] min-w-[300px] max-w-[1080px]">
                    <DialogHeader>
                      <DialogTitle className="text-4xl">{group}</DialogTitle>
                      <DialogDescription>
                        <img
                          src={image}
                          alt="About feature"
                          className="w-[200px] lg:w-[300px] mx-auto my-10"
                        />
                        <div className="text-black dark:text-primary text-xl m-5 ">
                          <p>{description}</p>
                          {courses.map((course) => (
                            <div className="pt-10" key={course.courseKey}>
                              <b>{course.heading}</b>
                              <p>
                                {course.completeDescription}
                              </p>
                            </div>
                          ))}
                          {/* {courses.split('\b').map(e => <p className="pt-2" style={{textIndent: "2em"}}>{e}</p> )} */}
                        </div>
                        <div className="m-auto max-w-[320px] grid gap-4 my-4">
                          <div className="text-center pt-10">
                            <b>{t('Contact Us')}</b>
                          </div>
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
          </TabsContent>
        ))}
      </Tabs>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* {groupedCourses.map(({ group, category, description, courses, image }: groupCoursesI, index) => (
          // <Dialog>
          //   <DialogTrigger>
          //     <Card key={String(index)+group} className="h-full  cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary">
          //       <CardHeader>
          //         <CardTitle>{group}</CardTitle>
          //       </CardHeader>

          //       <CardContent>
          //         <b>{heading}</b>

          //         <img
          //           src={image}
          //           alt="About feature"
          //           className="w-[200px] lg:w-[300px] mx-auto"
          //         />
          //       </CardContent>
                
          //       <CardFooter>
          //         {description}
          //       </CardFooter>
          //     </Card>
          //   </DialogTrigger>
          //   <DialogContent className="w-[80vw] min-w-[300px] max-w-[1080px]">
          //     <DialogHeader>
          //       <DialogTitle className="text-4xl">{title}</DialogTitle>
          //       <DialogDescription>

          //         <img
          //           src={image}
          //           alt="About feature"
          //           className="w-[200px] lg:w-[300px] mx-auto my-10"
          //         />
          //         <div className="text-black dark:text-primary text-xl m-5 ">
          //           {completeDescription.split('\b').map(e => <p className="pt-2" style={{textIndent: "2em"}}>{e}</p> )}
          //         </div>
          //         <div className="m-auto max-w-[320px] grid gap-4 my-4">
          //           <EmailButton/>
          //           <PhonelButton/>
          //           <WhatsAppButton />
          //           <InstagramButton />
          //         </div>
          //       </DialogDescription>
          //     </DialogHeader>
          //   </DialogContent>
          // </Dialog>
        ))} */}
      </div>
      
    </section>
  );
};
