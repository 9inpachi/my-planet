export const camelCaseToKebabCase = (value: string) => {
  return value.replace(/[A-Z]/g, (letter) => `-${letter}`);
};

export const evaluateStringTemplate = (
  template: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any,
) => {
  const properties = Object.getOwnPropertyNames(context);
  const values = Object.values(context);
  const evaluationFunction = new Function(
    ...properties,
    `return \`${template}\`;`,
  );

  return evaluationFunction.apply(context, ...values);
};
