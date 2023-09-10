function customJsx(
  tag: string,
  props: Record<string, string>,
  ...children: (string | Node)[]
) {
  const element = document.createElement(tag);
  if (props) {
    for (const [attribute, attributeValue] of Object.entries(props)) {
      element.setAttribute(attribute, attributeValue);
    }
    element.append(...children);
  }

  return element;
}

export { customJsx as jsxImplementation };
