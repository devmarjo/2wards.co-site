// import { cn } from "@/lib/utils"; // Importa a função de classe condicional do shadcn
// import { useTheme } from "./theme-provider";

const SvgIcon = ({ src, className }: { src: string, className?: string}) => {
  // const { theme } = useTheme(); // Obtém o tema atual (dark ou light)

  return (
    <span
      className={`inline-block bg-black dark:bg-green-500 ${className}`}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
    // <Icon
    //   className={cn(
    //     "w-6 h-6 fill-black dark:fill-green-500", // Estilos padrão
    //     className // Permite personalização adicional
    //   )}
    // />
  );
};

export default SvgIcon;