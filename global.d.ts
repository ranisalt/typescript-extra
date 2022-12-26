export = _;
export as namespace _;

declare global {
  // helper type to remove undefined from a type, like NonNullable<T>
  export type NonUndefinable<T> = Exclude<T, undefined>;

  // sets a given set of keys as required
  // like Required<T>, but for a subset of keys
  export type Require<T, Keys extends keyof T = keyof T> = {
    [P in Keys]-?: NonUndefinable<T[P]>;
  } & Pick<T, Exclude<keyof T, Keys>>;

  // sets a given set of keys as optional
  // by default, all keys are optional, like standard Partial<T>
  export type Optional<T, Keys extends keyof T = keyof T> = {
    [P in Keys]?: T[P];
  } & Pick<T, Exclude<keyof T, Keys>>;

  // gets the keys of a type that are required
  export type RequiredKeys<T> = keyof {
    [K in keyof T as T[K] extends NonUndefinable<T[K]> ? K : never]: T[K];
  };

  // gets the keys of a type that are optional
  export type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
}
