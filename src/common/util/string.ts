export const camelCaseToKebabCase = (value: string) => {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};

export const pascalCaseToKebabCase = (value: string) => {
  return camelCaseToKebabCase(value).substring(1);
};
