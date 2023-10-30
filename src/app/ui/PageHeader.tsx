import { irishGroverFont } from "../fonts";

interface Props {
  text: string;
}

export const PageHeader = ({ text }: Props) => (
  <h1
    className={`${irishGroverFont.className} text-center lg:text-4xl text-2xl lg:mb-10 mb-3 lg:mt-5`}
  >
    {text}
  </h1>
);
