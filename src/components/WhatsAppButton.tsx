
import { useTranslation } from "react-i18next"
import { WhatsApp } from "./customIcons/WhatsApp/WhatsApp"
import { buttonVariants } from "./ui/button"


export const WhatsAppButton = () => {
const { t } = useTranslation()
return(
            <a
              rel="noreferrer noopener"
              href={`https://wa.me/442089528721?text=` + encodeURI(t('WhatsAppMessage'))}
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <WhatsApp className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
)
}
