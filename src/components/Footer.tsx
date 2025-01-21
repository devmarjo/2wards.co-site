import { ContactButton } from "./ContactButton";
import { LogoIcon } from "./Icons";
// import { InstagramButton } from "./InstagramButton";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 gap-x-12 gap-y-8">
        <div className="flex-col">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex justify-center"
          >
            <LogoIcon height={100} />
          </a>
        </div>

        <div className="flex justify-center gap-2 text-center">
          <div className="m-auto">
            <ContactButton variant={"secondary"} />
          </div>
        </div>

      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()} Re-deigned by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://marjo.dev/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Marjo
          </a>
        </h3>
      </section>
    </footer>
  );
};
