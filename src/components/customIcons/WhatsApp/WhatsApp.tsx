import { useTheme } from "@/components/theme-provider"
import WhatsAppSvgWhite from '@/components/customIcons/WhatsApp/svg/White/Digital_Glyph_White.svg'
import WhatsAppSvgBlack from '@/components/customIcons/WhatsApp/svg/Black/Digital_Glyph_Black.svg'
export const WhatsApp = (props: { className: string }) => {
  const { theme } = useTheme()
  return (
    <div className={props.className}>
      <img src={theme !== 'dark' ? WhatsAppSvgBlack : WhatsAppSvgWhite } alt="" />
    </div>
  )
}