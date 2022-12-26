type T = {
  a: number;
  b?: string;
  c?: boolean;
};

const setDefaultB = (a: T): Require<T, "b"> => ({ ...a, b: "default" });

const a = { a: 1 };
const x = setDefaultB(a);

// would be an error if b was not required
console.log(x.b.toUpperCase());
