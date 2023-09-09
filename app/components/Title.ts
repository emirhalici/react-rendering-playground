import { Component, ComponentProps } from '../renderer';

type TextComponentProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
};
const TextComponent: Component<TextComponentProps> = ({
  children,
  type,
  text,
}: ComponentProps<TextComponentProps>) => {
  const textElement = document.createElement(type);
  textElement.innerText = text;
  if (children) textElement.append(...children);
  return textElement;
};

export default TextComponent;
