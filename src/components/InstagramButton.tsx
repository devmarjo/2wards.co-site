import { Instagram } from "lucide-react"
import { buttonVariants } from "./ui/button"


export const InstagramButton = () => {
return(
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/2wards_consultancy/"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Instagram className="mr-2 w-5 h-5" />
              Instagram
            </a>
)
}
