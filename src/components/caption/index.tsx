import { FC } from "react";

interface Props {
  label: string;
}

export const Caption: FC<Props> = ({ label }) => (
  <section>
    <p className={'text-[30px] text-primary-green-100 font-gotham-rounded-bold'}>{label}</p>
    <div className={'h-[8px] w-[50px] bg-primary-green-100'}></div>
  </section>
);
