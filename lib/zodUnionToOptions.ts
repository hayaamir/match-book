import { z, ZodLiteral, ZodUnion } from "zod";

type StringUnionSchema<T extends string> = ZodUnion<
  readonly [ZodLiteral<T>, ...ZodLiteral<T>[]]
>;

export const zodUnionToOptions = <T extends string>(
  schema: StringUnionSchema<T>
) => {
  return schema.options.map((opt) => ({
    value: opt.value as T,
    label: opt.value as T,
  }));
};
