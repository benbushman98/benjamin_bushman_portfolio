declare module "react-moving-text" {
  import { ComponentType } from "react";

  interface MovingComponentProps {
    type: string;
    dataText?: string[];
    [key: string]: unknown;
  }

  const MovingComponent: ComponentType<MovingComponentProps>;
  export default MovingComponent;
}
