import { Component } from '../renderer';

type ColumnComponentProps = {
  direction: 'up' | 'down';
};
const ColumnComponent: Component<ColumnComponentProps> = ({
  children,
  direction,
}) => {
  const div = document.createElement('div');
  div.className = `column-${direction}`;

  if (children) div.append(...children);
  return div;
};

export default ColumnComponent;
