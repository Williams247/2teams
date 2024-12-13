import { ProjectsList } from "./constant";
import { Caption } from "../caption";
import { Container } from "../container";
import { Button } from "../button";

export function Projects() {
  return (
    <Container>
      <div className={"mt-10"}>
        <Caption label="Our portfolio" />
        <div
          className={
            "flex flex-col sm:flex-row md:flex-row flex-wrap justify-between"
          }
        >
          {ProjectsList.map((i, index) => (
            <div
              key={index}
              className={
                "w-full sm:w-[48%] md:w-[32%] border-2 border-primary-green-100 rounded-xl mt-8 flex flex-col justify-between"
              }
            >
              <img
                src={i.image}
                alt={i.name}
                className={"w-full rounded-t-lg"}
              />

              <p className={"px-5 mt-4 font-bold text-black"}>{i.name}</p>

              <div className={"px-5 py-2 flex flex-col justify-between"}>
                <p className={"text-sm text-black"}>{i.description}</p>
                <div className="mt-4 mb-3">
                  <a href={i.link} target={"_blank"} rel={"noreferrer"}>
                    <Button
                      variant={"primary"}
                      label={"View Project"}
                      className={"w-full py-2.5 text-sm font-bold"}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
