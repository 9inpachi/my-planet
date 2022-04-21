export type HasRequiredKey<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

declare global {
  type ParameterOptional<T> = HasRequiredKey<T> extends never
    ? [props?: T]
    : [props: T];

  type FieldOptional<T> = HasRequiredKey<T> extends never ? T | undefined : T;
}
