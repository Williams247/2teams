import { useState } from "react";
import { Hambugger } from "../icons/hambugger";
import { menuList } from "./constant";
interface Props {
  handleOpenClose: () => void;
}

export function Navigation({ handleOpenClose }: Props) {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", function () {
    const scrolledAt =
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
    if (scrolledAt) setScrolled(true);
    else setScrolled(false);
  });

  return (
    <div
      className={`bg-white py-5 px-5 flex justify-between w-[85%] fixed rounded-xl ${
        scrolled
          ? "border-2 border-primary-green-100"
          : "border-2 border-transparent"
      }`}
    >
      <a href="/#" className="mt-1">
        <div className="flex">
          <div className="font-bold font-[10px] text-primary-green-100">
            2TEAMS
          </div>
        </div>
      </a>
      <div>
        <ul
          className={
            "hidden sm:hidden md:hidden lg:flex xl:flex justify-center"
          }
        >
          {menuList.map((data, index) => {
            return (
              <li className="px-3 active:scale-90 mt-1" key={index}>
                <a
                  href={data.path}
                  className="text-sm font-[500] text-primary-green-100"
                >
                  {data.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={
          "block sm:block md:block lg:hidden xl:hidden mt-[10px] active:scale-90"
        }
      >
        <button
          className={"border block border-gray-800 rounded-sm"}
          onClick={handleOpenClose}
        >
          <Hambugger />
        </button>
      </div>
    </div>
  );
}
