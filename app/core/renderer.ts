import { prepareStateForRender } from './useState';
import { Component, ComponentProps, Render, Root } from './types';
import { prepareEffectForRender } from './useEffect';

let currentRoot: Root | undefined;
let currentRootComponent: Component<object> | undefined;
let currentRootProps: ComponentProps<object>;

const createRoot = (entryPoint: Element | undefined): Root => {
  const render: Render<object> = (component, props) => {
    currentRootComponent = component;
    currentRootProps = props;
    prepareStateForRender();
    prepareEffectForRender();
    if (entryPoint && currentRootComponent) {
      const renderedElements = currentRootComponent(currentRootProps);
      entryPoint.replaceChildren(renderedElements);
    } else {
      const errorMessage = document.createElement('h1');
      errorMessage.textContent = 'Error occured while starting rendering.';
      document.body.appendChild(errorMessage);
    }
  };

  const unmount = () => {
    entryPoint = undefined;
  };

  const root = {
    render,
    unmount,
  };

  currentRoot = root;
  return root;
};

function triggerRender() {
  if (currentRoot && currentRootComponent) {
    currentRoot.render(currentRootComponent, currentRootProps);
  }
}

const DOM = {
  createRoot,
  triggerRender,
};
export default DOM;
