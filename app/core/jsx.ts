// https://gist.github.com/borestad/eac42120613bc67a3714f115e8b485a7

import { Component } from './types';

const entityMap: Record<string, string> = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": '#39',
  '/': '#x2F',
};

const escapeHtml = (str: object[] | string) =>
  String(str).replace(/[&<>"'\/\\]/g, (s) => `&${entityMap[s]};`);

// To keep some consistency with React DOM, lets use a mapper
const AttributeMapper = (val: string) =>
  ({
    tabIndex: 'tabindex',
    className: 'class',
    readOnly: 'readonly',
  })[val] || val;

function jsx(
  tag: string | Component,
  attributes?: Record<string, any>,
  ...children: (Element | string)[]
): Element {
  attributes = attributes || {};
  const stack: any[] = [...children];

  const isComponent = typeof tag === 'function';
  // Element to be created is a JSX Component, construct it directly and return
  if (isComponent) {
    // JSX elements have the children as props
    attributes['children'] = stack;
    return tag(attributes);
  }

  const element = document.createElement(tag);

  // Add attributes
  for (let [name, attributeValue] of Object.entries(attributes)) {
    name = escapeHtml(AttributeMapper(name));

    if (name.startsWith('on') && name.toLowerCase() in window) {
      // onClick/onClick => click...
      element.addEventListener(name.toLowerCase().substring(2), attributeValue);
    } else if (name === 'ref') {
      attributeValue(element);
    } else if (name === 'style') {
      Object.assign(element.style, attributeValue);
    } else if (attributeValue === true) {
      // checked => checked
      element.setAttribute(name, name);
    } else if (attributeValue !== false && attributeValue != null) {
      element.setAttribute(name, escapeHtml(attributeValue));
    } else if (attributeValue === false) {
      // checked => removed
      element.removeAttribute(name);
    }
  }

  // Append children
  while (stack.length) {
    const child = stack.shift();

    // Is child a leaf?
    if (!Array.isArray(child)) {
      element.appendChild(
        (child as HTMLElement).nodeType == null
          ? document.createTextNode(child.toString())
          : child,
      );
    } else {
      stack.push(...child);
    }
  }

  return element;
}

export default { jsx };
