import { useCallback, useRef } from "react";

export function useRefCallback(cb?: () => void, stop?: boolean,grid?:any[]) {
  const ref = useRef(null);
  const handleObserver = useCallback((entries: any) => {

    if (stop) return;
    const target = entries[0];

    if (target.isIntersecting) {
      if (cb) cb();
    }
  }, []);

  const setRef = useCallback((node: any) => {
    if (node&&grid?.length) {
      ref.current = node;

      const option = {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleObserver, option);
      if (ref.current) observer.observe(ref.current);
    }
  }, [grid]);

  return setRef;
}
