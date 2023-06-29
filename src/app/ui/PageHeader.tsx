import { irishGroverFont } from "../fonts";

interface Props {
  text: string;
}

export const PageHeader = ({ text }: Props) => (
  <h1 className={`${irishGroverFont.className} text-4xl mb-10 mt-5`}>{text}</h1>
);
