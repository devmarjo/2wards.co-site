import { Phone } from "lucide-react"
import { buttonVariants } from "./ui/button"
import { useTranslation } from "react-i18next"


export const PhonelButton = () => {
  const { t } = useTranslation()
return(
            <a
              rel="noreferrer noopener"
              href="tel:+442089528721"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Phone className="mr-2 w-5 h-5" />
              {t('contactDialog.phone')}
            </a>
)
}
