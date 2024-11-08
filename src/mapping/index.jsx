import { Children } from "react";

export const Mapping = ({ of, render }) => {
  return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};
