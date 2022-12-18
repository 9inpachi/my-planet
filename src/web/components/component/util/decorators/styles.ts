export const styles = (styles: string): ClassDecorator => {
  return (target) => {
    const allStyles = [styles];
    // Inherit styles from the parent component (if the component is
    // extended).
    if (target.prototype.styles) {
      allStyles.push(target.prototype.styles);
    }

    // Sets `styles` as the property of the decorated class. God bless the prototype chain.
    Reflect.defineProperty(target.prototype, 'styles', {
      value: allStyles.join('\n\n'),
    });
  };
};
