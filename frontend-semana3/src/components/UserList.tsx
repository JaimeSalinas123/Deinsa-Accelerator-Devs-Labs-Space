import { useCallback, useEffect, useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchUsers, createUser, ApiError } from "../api/userApi";
import type { CreateUserDTO, User } from "../types/user";
import { UserCard } from "./UserCard";
import { UserForm } from "./UserForm";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Modal } from "./ui/Modal";

export function UserList() {
  const { state, retry } = useFetch(fetchUsers);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (state.status === "success") setUsers(state.data);
  }, [state]);

  const handleCreate = useCallback(async (dto: CreateUserDTO) => {
    const tempId = -Date.now();
    const optimisticUser: User = { id: tempId, ...dto };

    setCreating(true);
    setFormError(null);
    setUsers((prev) => [...prev, optimisticUser]);

    try {
      const created = await createUser(dto);
      setUsers((prev) => prev.map((u) => (u.id === tempId ? created : u)));
      setModalOpen(false);
    } catch (err) {
      setUsers((prev) => prev.filter((u) => u.id !== tempId));
      setFormError(err instanceof ApiError ? err.message : "No se pudo crear el usuario");
    } finally {
      setCreating(false);
    }
  }, []);

  const filteredUsers = useMemo(
    () => users.filter((u) => u.nombre.toLowerCase().includes(search.toLowerCase())),
    [users, search],
  );

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex items-center justify-between gap-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar usuario..."
          className="w-full max-w-xs rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        />
        <Button onClick={() => setModalOpen(true)}>+ Nuevo usuario</Button>
      </div>

      {state.status === "loading" && (
        <Card className="text-center text-sm text-ink-muted">Cargando usuarios...</Card>
      )}

      {state.status === "error" && (
        <Card className="flex items-center justify-between gap-md border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm text-danger">{state.error}</p>
          <Button variant="danger" size="sm" onClick={retry}>Reintentar</Button>
        </Card>
      )}

      {state.status === "success" && filteredUsers.length === 0 && (
        <Card className="text-center text-sm text-ink-muted">Sin resultados</Card>
      )}

      {state.status === "success" && (
        <div className="flex flex-col gap-sm">
          {filteredUsers.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Nuevo usuario">
        {formError && <p className="mb-md text-sm text-danger">{formError}</p>}
        <UserForm onSubmit={handleCreate} submitting={creating} />
      </Modal>
    </div>
  );
}