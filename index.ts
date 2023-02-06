import * as zod from 'zod';

export const userValidator = zod.object({
  userName: zod.string()
    .min(1, '必須要有使用者帳號'),
  password: zod.string()
    .min(1, '必須要有使用者密碼')
});

export type userType = zod.infer<typeof userValidator>;

export const createGenericValidator = <T extends zod.ZodTypeAny>(input: T) => {
  return zod.object({
    id: zod.string()
      .min(1, 'id is required'),
    currentValue: zod.array(input),
  })
}

export type createGenericValidatorType = ReturnType<typeof createGenericValidator>;

export const mainFunction = (inputValidateData: unknown) => {
  const mainValidator = createGenericValidator(userValidator)
  const { success } = mainValidator.safeParse(inputValidateData);
  return success;
}
