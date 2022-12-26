import { expectAssignable } from "tsd";

type T_Optional = {
  a: number;
  b: string;
  c: null;
};
declare function test_optional(): Optional<T_Optional, "a">;
expectAssignable<{
  a?: number;
  b: string;
  c: null;
}>(test_optional());

declare function f_optional_allKeys(): Optional<T_Optional, keyof T_Optional>;
expectAssignable<Optional<T_Optional>>(f_optional_allKeys());

declare function f_optional_noKeys(): Optional<T_Optional, never>;
expectAssignable<T_Optional>(f_optional_noKeys());

declare function f_optional_defaultAllKeys(): Optional<T_Optional>;
expectAssignable<Optional<T_Optional, keyof T_Optional>>(
  f_optional_defaultAllKeys()
);

type T_Optional_Null = {
  a: null;
};
declare function f_optional_null(): Optional<T_Optional_Null>;
expectAssignable<{ a?: null }>(f_optional_null());

const a: Optional<{ a: number; b: string }, "b"> = { a: 1 };
