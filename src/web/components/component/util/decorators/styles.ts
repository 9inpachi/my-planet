export const styles = (styles: string): ClassDecorator => {
  return (target) => {
    // Sets `styles` as the property of the decorated class. God bless the prototype chain.
    Reflect.defineProperty(target.prototype, 'styles', {
      value: styles,
    });
  };
};
