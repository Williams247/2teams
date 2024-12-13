import { Container } from "../container";
import { Mail, Phone } from "../icons";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-[#58ccc4] to-[#28bccc] py-8 w-full"
    >
      <Container>
        <div
          className={
            "flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between"
          }
        >
          <div className="text-sm text-white font-bold">
            All right reserved {new Date().getFullYear()}
          </div>
          <div
            className={
              "flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mt-3 sm:mt-3 md:mt-3 lg:mt-0 xl:mt-0"
            }
          >
            <div className="flex">
              <Phone />
              <div className="text-sm ml-2 text-white font-bold">
                Tel: +2347012714644
              </div>
            </div>
            <div className={"flex px-2 mt-3 sm:mt-3 md:mt-3 lg:mt-0 xl:mt-0"}>
              <Mail />
              <div className="text-sm ml-2 text-white font-bold">
                williamsalexjr@gmail.com
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
