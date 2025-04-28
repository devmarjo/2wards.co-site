// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { EmailButton } from "./EmailButton";
import { PhonelButton } from "./PhoneButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { InstagramButton } from "./InstagramButton";
import { useCourses, CategoryI } from "@/lib/useCourses";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";

export const Features = () => {

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
                  <DialogContent className="w-[90vw] md:w-[80vw] min-w-[300px] max-w-[1080px] max-h-[80vh] overflow-scroll">
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

      </div>
      
    </section>
  );
};
