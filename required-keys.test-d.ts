import { expectNever, expectType } from "tsd";

type T_RequiredKeys = {
  a: number;
  b?: string;
  c: boolean;
};
declare function test_requiredKeys(): RequiredKeys<T_RequiredKeys>;
expectType<"a" | "c">(test_requiredKeys());

type T_RequiredKeys_AllOptional = {
  a?: number;
  b?: string;
  c?: boolean;
};
declare function f_requiredKeys_allOptional(): RequiredKeys<T_RequiredKeys_AllOptional>;
expectNever(f_requiredKeys_allOptional());

type T_RequiredKeys_AllRequired = {
  a: number;
  b: string;
  c: boolean;
};
declare function f_requiredKeys_allRequired(): RequiredKeys<T_RequiredKeys_AllRequired>;
expectType<keyof T_RequiredKeys_AllRequired>(f_requiredKeys_allRequired());

type T_RequiredKeys_AcceptsNull = {
  a: null;
  b?: null;
};
declare function f_requiredKeys_acceptsNull(): RequiredKeys<T_RequiredKeys_AcceptsNull>;
expectType<"a">(f_requiredKeys_acceptsNull());
