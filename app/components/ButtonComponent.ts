import { Component, ComponentProps } from '../renderer';

type ButtonComponentProps = {
  innerText: string;
  onClick: () => void;
};

const ButtonComponent: Component<ButtonComponentProps> = ({
  children,
  innerText,
  onClick: eventListener,
  className,
}: ComponentProps<ButtonComponentProps>) => {
  const button = document.createElement('button');
  button.innerText = innerText;
  button.addEventListener('click', eventListener);
  if (className) button.className = className;
  if (children) button.append(...children);
  return button;
};

export default ButtonComponent;
