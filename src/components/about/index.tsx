import { Caption } from "../caption";
import { Container } from "../container";

export function About() {
  return (
    <section id="about" className="py-36 bg-primary-gray-300">
      <Container>
        <div>
          <Caption label="About us" />
          <div className={"mt-10"}>
            <p className={"text-black max-w-[50rem] text-[1.1rem] leading-9"}>
              2Teams is a company that was founded in the year 2021, at 2teams
              we help offer services that relates to software development, we
              ensure that your project is scalable, 100% efficient and well
              stress tested.
            </p>
            <p className={"text-black max-w-[50rem] text-[1.1rem] leading-9"}>
              You can tell us more about the project you have when you get a
              quote.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
