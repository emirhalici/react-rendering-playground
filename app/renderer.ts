import { prepareForRender } from './hooks/useState';

type ChildrenProps = {
  children?: Node[];
  className?: string;
};

type ComponentProps<T = object> = ChildrenProps & T;
type Component<T = object> = (props: ComponentProps<T>) => HTMLElement;

let initialComponent: Component;
let initialComponentProps: ComponentProps;

function render() {
  prepareForRender();
  const entryPoint = document.querySelector('.playground-entry-point');
  if (entryPoint) {
    entryPoint.replaceChildren(initialComponent(initialComponentProps));
  } else {
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = 'Error occured while starting rendering.';
    document.body.replaceChildren(errorMessage);
  }
}

function start(parentComponent: Component, props: ComponentProps) {
  initialComponent = parentComponent;
  initialComponentProps = props;
  render();
}

export { render, start };
export type { Component, ComponentProps };
