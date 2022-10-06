export const template = (template: string): ClassDecorator => {
  return (target) => {
    // Sets `template` as the property of the decorated class. God bless the prototype chain.
    Reflect.defineProperty(target.prototype, 'template', {
      value: template,
    });
  };
};
