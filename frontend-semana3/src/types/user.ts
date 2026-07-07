// ============================================================
// 1) Entidad base
// ============================================================
export interface User {
  id: number;
  nombre: string;
  email: string;
  rol: Role;
}

// ============================================================
// 2) Inferencia avanzada: as const + keyof + typeof
// ============================================================
export const ROLES = ["admin", "editor", "viewer"] as const;

// typeof ROLES[number] -> "admin" | "editor" | "viewer"
export type Role = (typeof ROLES)[number];

// keyof User -> "id" | "nombre" | "email" | "rol"
export type UserField = keyof User;

// Mapped type: recorre las keys de User y las vuelve nullable
export type NullableUser = {
  [K in UserField]: User[K] | null;
};

// ============================================================
// 3) Utility Types para DTOs
// ============================================================
export type CreateUserDTO = Omit<User, "id">;
export type UpdateUserDTO = Partial<Omit<User, "id">>;
export type UserPreview = Pick<User, "id" | "nombre">;
export type UserMap = Record<number, User>;

// ============================================================
// 4) Discriminated Union para estados async
// ============================================================
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };