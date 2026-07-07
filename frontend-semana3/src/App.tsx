import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { UserList } from "./components/UserList";
import { Button } from "./components/ui/Button";

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="border-b border-border bg-surface dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-md py-md">
        <h1 className="text-lg font-semibold text-ink dark:text-slate-100">Semana 3 · TS + React + Tailwind</h1>
        <Button variant="ghost" size="sm" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
        </Button>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-muted transition-colors dark:bg-slate-900">
        <Header />
        <main className="mx-auto max-w-3xl px-md py-xl">
          <UserList />
        </main>
      </div>
    </ThemeProvider>
  );
}