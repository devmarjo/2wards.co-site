import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { InstagramButton } from "./InstagramButton"
import { EmailButton } from "./EmailButton"
import { PhonelButton } from "./PhoneButton"
import { WhatsAppButton } from "./WhatsAppButton"

export function ContactDialog(
    { variant = "default" }:
    { variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined }
) {
  const { t } = useTranslation()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} >{t("Contact Us")}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("Contact Us")}</DialogTitle>
          <DialogDescription>
            {t("contactDialog.dialogHeader")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <EmailButton/>
          <PhonelButton/>
          <WhatsAppButton />
          <InstagramButton />
        </div>
      </DialogContent>
    </Dialog>
  )
}
