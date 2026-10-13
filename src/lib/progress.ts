const key = "vvs-learning-v1";
const valid = /^0[1-4]-[0-3]$/;
export function readProgress(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value)
      ? [
          ...new Set(
            value.filter(
              (v): v is string => typeof v === "string" && valid.test(v),
            ),
          ),
        ]
      : [];
  } catch {
    return [];
  }
}
export function saveProgress(id: string): boolean {
  if (!valid.test(id)) return false;
  try {
    localStorage.setItem(
      key,
      JSON.stringify([...new Set([...readProgress(), id])]),
    );
    return true;
  } catch {
    return false;
  }
}
