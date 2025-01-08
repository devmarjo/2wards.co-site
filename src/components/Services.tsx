import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";
import { useTranslation } from "react-i18next";
import { FileQuestion, School,  Book,  FileText,  Megaphone,  Users,  RefreshCw,  ShoppingBag,  Package,  Presentation,  Globe, LucideProps } from "lucide-react"; // Importa todos os ícones da biblioteca
import { ForwardRefExoticComponent, RefAttributes } from "react";

const icons: {[key: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> } = {
  School,
	Book,
	FileText,
	Megaphone,
	Users,
	RefreshCw,
	ShoppingBag,
	Package,
	Presentation,
	Globe,
}

interface ServiceProps {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

// const serviceList: ServiceProps[] = [
//   {
//     title: "Code Collaboration",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <ChartIcon />,
//   },
//   {
//     title: "Project Management",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <WalletIcon />,
//   },
//   {
//     title: "Task Automation",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <MagnifierIcon />,
//   },
// ];

export const Services = () => {
  const {t} = useTranslation()
  const servicesList = t('services.list', { returnObjects: true }) as ServiceProps[];
  if (!Array.isArray(servicesList)) {
    console.error("Services data is not an array. Please check the translation file.");
    return null;
  }
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t('services.title')}
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            {t('services.subTitle')}
            {/* {{services}} */}
          </p>

          <div className="grid lg:grid-cols-[1fr,1fr] gap-8">
            {servicesList.map((el: ServiceProps) => {
              let IconComponent
              if (icons[el.icon]) {
                IconComponent = icons[el.icon]
              } else {
                IconComponent = FileQuestion
              }
              return <Card key={el.id}>
                        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                            {IconComponent && <IconComponent size={50}/>}
                          </div>
                          <div>
                            <CardTitle>{el.title}</CardTitle>
                            <CardDescription className="text-md mt-2">
                                {/* {JSON.stringify(el.items)} */}
                              <ul>
                                {el.items.map((item: string, index: number) => <li key={el.id+index}>{item}</li>)}
                                {/* {el.items.map((item: string, index: number) => JSON.stringify(item))} */}
                              </ul>
                            </CardDescription>
                          </div>
                        </CardHeader>
                      </Card>

            })}
          </div>
        </div>
      </div>
    </section>
  );
};
