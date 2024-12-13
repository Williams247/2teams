import { Container } from "../container";

export function Hero() {
  return (
    <div id={"home"} className={"w-full h-screen flex items-center"}>
      <Container>
        <div className={"flex justify-center"}>
          <div>
            <p
              className={
                "font-gotham-rounded-bold text-black text-[4rem] md:text-[12rem] text-center leading-[10rem]"
              }
            >
              2teams.
            </p>
            <div className="flex justify-center">
              <p className="text-[1.5rem] mt-5 max-w-[55rem] text-center text-white">
                2teams helps you build any project you need.
              </p>
            </div>
            <div className="flex justify-center mt-9">
              <a href="#quote">
                <button className="border border-white px-5 py-3 text-white rounded-3xl text-md active:scale-90">
                  Get a Qoute
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
