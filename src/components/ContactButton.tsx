import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

import { useDispatch } from 'react-redux'
import { setValueTrue } from '@/features/contactus/contactusSlicer'

export function ContactButton(
    { variant = "default" }:
    { variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined }
) {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <Button onClick={() => dispatch(setValueTrue())} variant={variant} >{t("Contact Us")}</Button>
  )
}
