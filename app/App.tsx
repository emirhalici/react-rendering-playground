import ButtonComponent from './components/ButtonComponent';
import CheckboxComponent from './components/CheckboxComponent';
import TextComponent from './components/TitleComponent';
import { customJsx } from './core/jsxHelpers';
import { Component, ComponentProps } from './core/types';
import useState from './core/useState';

const App: Component = ({}: ComponentProps) => {
  const [state, setState] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);

  const x = (
    <div>
      <h1>Hello world {state}</h1>
      {ButtonComponent({
        innerText: 'Click me',
        onClick: () => {
          setState(state + 1);
        },
      })}
      {TextComponent({
        type: 'h3',
        text: `Toggle value: ${toggleValue}`,
      })}
      {CheckboxComponent({
        label: 'Toggle',
        id: 'checkbox',
        checked: toggleValue,
        onChecked: setToggleValue,
      })}
    </div>
  );
  return x;
};

export default App;
