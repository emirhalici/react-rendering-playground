import ButtonComponent from './components/ButtonComponent';
import CheckboxComponent from './components/CheckboxComponent';
import ColumnComponent from './components/ColumnComponent';
import TextComponent from './components/TitleComponent';
import { Component, ComponentProps } from './core/renderer';
import useState from './core/useState';

const App: Component = ({ children }: ComponentProps) => {
  const [state, setState] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);

  return ColumnComponent({
    direction: 'down',
    children: [
      TextComponent({
        type: 'h1',
        text: `Hello world ${state}`,
      }),
      ButtonComponent({
        innerText: 'Click me',
        onClick: () => {
          setState(state + 1);
        },
      }),
      TextComponent({
        type: 'h3',
        text: `Toggle value: ${toggleValue}`,
      }),
      CheckboxComponent({
        label: 'Toggle',
        id: 'checkbox',
        checked: toggleValue,
        onChecked: setToggleValue,
      }),
      ...(children ?? []),
    ],
  });
};

export default App;
