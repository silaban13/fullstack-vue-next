export const validateRequest = async (schema, req) => {
  const body = await req.json();

  const result = schema.safeParse(body);

  if (!result.success) {
    const formatted = result.error.format();

    const flatErrors = Object.values(formatted)
      .flat()
      .filter(Boolean)
      .map((err) => err._errors)
      .flat();

    return {
      error: flatErrors.join(", "),
      status: 400,
    };
  }

  return {
    data: result.data,
  };
};