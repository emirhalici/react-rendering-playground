import ButtonComponent from './components/ButtonComponent';
import ColumnComponent from './components/ColumnComponent';
import TextComponent from './components/Title';
import { Component, ComponentProps } from './renderer';
import useState from './useState';

const App: Component = ({ children }: ComponentProps) => {
  const [state, setState] = useState(1);

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
      ...(children ?? []),
    ],
  });
};

export default App;
