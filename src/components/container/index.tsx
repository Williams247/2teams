import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return (
    <div className={"px-8 sm:px-8 md:px-10 lg:container xl:container"}>
      {children}
    </div>
  );
}
