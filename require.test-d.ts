import { expectAssignable } from "tsd";

type T_Require = {
  a?: number;
  b?: string;
};
declare function test_require(): Require<T_Require, "a">;
expectAssignable<{
  a: number;
  b?: string;
}>(test_require());

declare function f_require_allKeys(): Require<T_Require, keyof T_Require>;
expectAssignable<{
  a: number;
  b: string;
}>(f_require_allKeys());

declare function f_require_noKeys(): Require<T_Require, never>;
expectAssignable<T_Require>(f_require_noKeys());

declare function f_require_defaultAllKeys(): Require<T_Require>;
expectAssignable<Require<T_Require, keyof T_Require>>(
  f_require_defaultAllKeys()
);

type T_Require_NullNotRequire = {
  a: null;
  b?: null;
};
declare function f_require_nullNotRequire(): Require<T_Require_NullNotRequire>;
expectAssignable<{
  a: null;
  b: null;
}>(f_require_nullNotRequire());
