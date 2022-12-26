import { expectType } from "tsd";

type T_NonUndefinable = number | undefined;
declare function test_nonUndefinable(): NonUndefinable<T_NonUndefinable>;
expectType<number>(test_nonUndefinable());

type T_NonUndefinable_NotUndefined = number;
declare function test_nonUndefinable_notUndefined(): NonUndefinable<T_NonUndefinable_NotUndefined>;
expectType<number>(test_nonUndefinable_notUndefined());

type T_NonUndefinable_OnlyUndefined = undefined;
declare function test_nonUndefinable_onlyUndefined(): NonUndefinable<T_NonUndefinable_OnlyUndefined>;
expectType<never>(test_nonUndefinable_onlyUndefined());
