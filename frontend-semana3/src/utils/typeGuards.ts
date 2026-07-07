import { ROLES, type Role, type User } from "../types/user";

// Guard con "typeof"
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Guard con "in": valida la forma de un objeto sin castear
export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "nombre" in value &&
    "email" in value &&
    "rol" in value
  );
}

// Guard para un tipo unión de literales
export function isRole(value: unknown): value is Role {
  return typeof value === "string" && (ROLES as readonly string[]).includes(value);
}

// Narrowing real: de unknown (ej. JSON.parse) a User validado
export function parseUser(raw: unknown): User | null {
  if (!isUser(raw)) return null;
  if (!isRole(raw.rol)) return null;
  return raw;
}