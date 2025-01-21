import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { InstagramButton } from "./InstagramButton"
import { EmailButton } from "./EmailButton"
import { PhonelButton } from "./PhoneButton"
import { WhatsAppButton } from "./WhatsAppButton"
import { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { start, setValueTrue, setValueFalse } from '@/features/contactus/contactusSlicer'


export function ContactDialog() {
  const isOpen = useSelector((state: { countactus: { value: boolean} }) => state.countactus.value )
  const isStarted = useSelector((state: { countactus: { started: boolean} }) => state.countactus.started )
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const setIsOpen = (status: boolean) => status ? dispatch(setValueTrue()) : dispatch(setValueFalse())
  const { t } = useTranslation()
  useEffect(() => {
    if (isStarted) return
      dispatch(start())
      const handleHashChange = () => {
        if (window.location.hash === '#contactus') {
          dispatch(setValueTrue());
        } else {
          dispatch(setValueFalse());
        }
      };
      // Verificar o hash inicial
      handleHashChange();

      // Adicionar um listener para alterações no hash
      window.addEventListener('hashchange', handleHashChange);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    
  }, [isStarted, dispatch])
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
