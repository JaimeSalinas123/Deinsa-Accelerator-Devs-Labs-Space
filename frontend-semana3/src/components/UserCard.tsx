import { memo } from "react";
import { Card } from "./ui/Card";
import type { User } from "../types/user";

interface UserCardProps {
  user: User;
}

export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  return (
    <Card hoverable className="flex items-center justify-between">
      <div>
        <p className="font-medium text-ink dark:text-slate-100">{user.nombre}</p>
        <p className="text-sm text-ink-muted">{user.email}</p>
      </div>
      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
        {user.rol}
      </span>
    </Card>
  );
});