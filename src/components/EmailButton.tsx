import { AtSign } from "lucide-react"
import { buttonVariants } from "./ui/button"


export const EmailButton = () => {
return(
            <a
              rel="noreferrer noopener"
              href="mailto:contact@2wards.co"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <AtSign className="mr-2 w-5 h-5" />
              Email
            </a>
)
}
