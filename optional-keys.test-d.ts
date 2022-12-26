import { expectNever, expectType } from "tsd";

type T_OptionalKeys = {
  a: number;
  b?: string;
  c?: boolean;
};
declare function test_optionalKeys(): OptionalKeys<T_OptionalKeys>;
expectType<"b" | "c">(test_optionalKeys());

type T_OptionalKeys_AllOptional = {
  a?: number;
  b?: string;
  c?: boolean;
};
declare function f_optionalKeys_allOptional(): OptionalKeys<T_OptionalKeys_AllOptional>;
expectType<keyof T_OptionalKeys_AllRequired>(f_optionalKeys_allOptional());

type T_OptionalKeys_AllRequired = {
  a: number;
  b: string;
  c: boolean;
};
declare function f_optionalKeys_allRequired(): OptionalKeys<T_OptionalKeys_AllRequired>;
expectNever(f_optionalKeys_allRequired());

type T_OptionalKeys_AcceptsNull = {
  a: null;
  b?: null;
};
declare function f_optionalKeys_acceptsNull(): OptionalKeys<T_OptionalKeys_AcceptsNull>;
expectType<"b">(f_optionalKeys_acceptsNull());
