import { Component, ComponentProps } from '../core/renderer';

type TextComponentProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
};
const TextComponent: Component<TextComponentProps> = ({
  children,
  type,
  text,
  className,
}: ComponentProps<TextComponentProps>) => {
  const textElement = document.createElement(type);
  textElement.innerText = text;
  if (className) textElement.className = className;
  if (children) textElement.append(...children);
  return textElement;
};

export default TextComponent;
