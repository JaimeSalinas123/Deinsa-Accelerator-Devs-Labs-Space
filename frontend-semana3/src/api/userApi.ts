import type { CreateUserDTO, User } from "../types/user";

// Error tipado propio, en vez de dejar todo en "unknown"
export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// "Base de datos" en memoria para simular un backend
let usuarios: User[] = [
  { id: 1, nombre: "Juan", email: "juan@mail.com", rol: "admin" },
  { id: 2, nombre: "Maria", email: "maria@mail.com", rol: "editor" },
  { id: 3, nombre: "Pedro", email: "pedro@mail.com", rol: "viewer" },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// GET /usuarios simulado
export async function fetchUsers(): Promise<User[]> {
  await delay(900);

  // 1 de cada 5 llamadas falla, para poder ver el estado "error" y el retry
  if (Math.random() < 0.2) {
    throw new ApiError("No se pudo conectar con el servidor", 500);
  }

  return usuarios;
}

// POST /usuarios simulado
export async function createUser(dto: CreateUserDTO): Promise<User> {
  await delay(600);

  if (!dto.nombre || !dto.email) {
    throw new ApiError("Nombre y email son obligatorios", 400);
  }

  const nuevo: User = { id: usuarios.length + 1, ...dto };
  usuarios = [...usuarios, nuevo];
  return nuevo;
}

// ReturnType: derivamos el tipo desde la firma de la función
export type FetchUsersResult = ReturnType<typeof fetchUsers>; // Promise<User[]>
export type CreateUserResult = Awaited<ReturnType<typeof createUser>>; // User