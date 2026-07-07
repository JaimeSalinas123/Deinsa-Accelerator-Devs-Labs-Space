import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";
import { ROLES, type CreateUserDTO, type Role } from "../types/user";

interface UserFormProps {
  onSubmit: (dto: CreateUserDTO) => void;
  submitting?: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
}

export function UserForm({ onSubmit, submitting = false }: UserFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState<Role>("viewer");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const next: FormErrors = {};
    if (nombre.trim().length < 2) next.nombre = "El nombre debe tener al menos 2 caracteres";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Ingresa un email válido";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ nombre, email, rol });
    setNombre("");
    setEmail("");
    setRol("viewer");
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brand-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <div>
        <label className="mb-xs block text-sm font-medium text-ink dark:text-slate-200">Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} className={inputClasses} placeholder="Ana Torres" />
        {errors.nombre && <p className="mt-xs text-xs text-danger">{errors.nombre}</p>}
      </div>

      <div>
        <label className="mb-xs block text-sm font-medium text-ink dark:text-slate-200">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} placeholder="ana@mail.com" />
        {errors.email && <p className="mt-xs text-xs text-danger">{errors.email}</p>}
      </div>

      <div>
        <label className="mb-xs block text-sm font-medium text-ink dark:text-slate-200">Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value as Role)} className={inputClasses}>
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <Button type="submit" disabled={submitting}>
        {submitting ? "Guardando..." : "Crear usuario"}
      </Button>
    </form>
  );
}