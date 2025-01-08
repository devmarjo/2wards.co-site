import cert1 from '@/assets/experts/1.png'
import cert2 from '@/assets/experts/2.png'
import cert3 from '@/assets/experts/3.png'
import cert4 from '@/assets/experts/4.png'
import cert5 from '@/assets/experts/5.png'
import cert6 from '@/assets/experts/6.png'
import { useTranslation } from 'react-i18next'



const sponsors: string[] = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
];

export const Sponsors = () => {
  const { t } = useTranslation()
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:pb-32"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-32">
        {t("Consulting Expertise")}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sponsors.map((el) => (
          <div>
            <img src={el} className='w-1/2 m-auto my-auto' />
          </div>
        ))}
      </div>
    </section>
  );
};
