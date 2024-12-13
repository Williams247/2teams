import { useState } from "react";
import { Container } from "./components/container";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import { SideBar } from "./components/navigation/side-bar";
import { OurMotor } from "./components/our-motor";
import { ContactForm } from "./components/contact-form"

const PortFolio = () => {
  const [open, setOpen] = useState(false);
  const handleOpenClose = (): void => setOpen(!open);
  return (
    <main>
      <div className="bg-gradient-to-r from-[#58ccc4] to-[#28bccc] py-6 w-full">
        <Container>
          <div className={"flex justify-center w-full"}>
            <Navigation handleOpenClose={handleOpenClose} />
          </div>
        </Container>
        <Hero />
      </div>
      <About />
      <Projects />
      <OurMotor />
      <ContactForm />
      <Footer />
      {open && <SideBar handleOpenClose={handleOpenClose} />}
    </main>
  );
};

export default PortFolio;
