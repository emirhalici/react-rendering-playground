module.exports = {
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        const importNodes = context.getSourceCode().ast.body.filter(
          (node) => node.type === 'ImportDeclaration'
        );

        const customJsxImport = importNodes.find((importNode) =>
          importNode.specifiers.some(
            (specifier) =>
              specifier.type === 'ImportSpecifier' &&
              specifier.local.name === 'customJsx'
          )
        );

        if (!customJsxImport) {
          context.report({
            node,
            message: 'customJsx should be imported when using JSX.',
          });
        }
      },
    };
  }
};
