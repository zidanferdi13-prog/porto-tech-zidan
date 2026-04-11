export function textOf(value, isId) {
  if (value && typeof value === "object" && "id" in value && "en" in value) {
    return isId ? value.id : value.en;
  }

  return value;
}
