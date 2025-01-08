import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Objeto com as chaves e os nomes das línguas
const languagesLabel: { [key: string]: string } = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  ro: "Română",
};

export function I18nToggle() {
  const { i18n } = useTranslation();
  const languages = Object.keys(i18n.options.resources || {})
  const language = i18n.language

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ghost"
        >
          <Globe className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all" /> <span>{String(language).toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {
          languages.map(el => (
            <DropdownMenuItem onClick={() => i18n.changeLanguage(el)}>
              {languagesLabel[el]}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
