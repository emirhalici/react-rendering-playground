import { prepareForRender } from './useState';
import { Component, ComponentProps } from './types';

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

function jsx(
  elementTag: string,
  attributes: Record<string, string>,
  children: (string | Node)[],
): HTMLElement {
  const element = document.createElement(elementTag);

  for (const [attributeName, attributeValue] of Object.entries(attributes)) {
    element.setAttribute(attributeName, attributeValue);
  }

  if (typeof children === 'string') {
    element.textContent = children;
  } else {
    element.append(...children);
  }

  return element;
}

export { render, start, jsx };
