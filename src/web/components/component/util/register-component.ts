import { pascalCaseToKebabCase } from '../../../../common/util/string';

export const registerComponent = (constructor: CustomElementConstructor) => {
  const name = pascalCaseToKebabCase(constructor.name);
  customElements.define(`mp-${name}`, constructor);
};
