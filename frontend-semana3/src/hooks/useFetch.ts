 import { useCallback, useEffect, useState } from "react";
import type { AsyncState } from "../types/user";
import { ApiError } from "../api/userApi";

export function useFetch<T>(fetcher: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({ status: "idle" });

  const run = useCallback(() => {
    setState({ status: "loading" });

    fetcher()
      .then((data) => setState({ status: "success", data }))
      .catch((err: unknown) => {
        const message = err instanceof ApiError ? err.message : "Error inesperado";
        setState({ status: "error", error: message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    run();
  }, [run]);

  return { state, retry: run };
}