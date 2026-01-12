import { useCallback } from "react";

export function useToast() {
  const toast = useCallback((/* options */) => {
    // no-op placeholder: implement toast logic if needed
  }, []);

  return { toasts: [], toast };
}
