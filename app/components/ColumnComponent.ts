import { Component } from '../core/renderer';

type ColumnComponentProps = {
  direction: 'up' | 'down';
};
const ColumnComponent: Component<ColumnComponentProps> = ({
  children,
  direction,
  className,
}) => {
  const div = document.createElement('div');
  div.className = `column-${direction}`;

  if (children) div.append(...children);
  if (className) div.className = className;
  return div;
};

export default ColumnComponent;
