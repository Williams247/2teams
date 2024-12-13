import { Container } from "../container";
import { Efficiency } from "./icons/efficiency";
import { TimeManagement } from "./icons/time-management";
import { Scalability } from "./icons/scalability";
import { Caption } from "../caption";

export function OurMotor() {
  return (
    <section className="bg-[#f9faff] py-24 mt-20">
      <div>
        <Container>
          <div className="flex justify-center">
            <Caption label="Our Motor" />
          </div>

          <div className="flex flex flex-col md:flex-row justify-between mt-20">
            <div className="w-full md:w-[30%]">
              <div className="flex justify-center">
                <Efficiency />
              </div>
              <p className="text-center mt-4 text-primary-green-100 font-bold">
                Efficiency
              </p>
            </div>
            <div className="w-full md:w-[30%] mt-10 md:mt-0">
              <div className="flex justify-center">
                <TimeManagement />
              </div>
              <p className="text-center mt-4 text-primary-green-100 font-bold">
                Time Management
              </p>
            </div>
            <div className="w-full md:w-[30%] mt-10 md:mt-0">
              <div className="flex justify-center">
                <Scalability />
              </div>
              <p className="text-center mt-4 text-primary-green-100 font-bold">
                Scalability
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
