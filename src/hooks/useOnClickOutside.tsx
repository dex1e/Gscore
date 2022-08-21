import { RefObject, useEffect } from "react";

import { EventOnClickOutside } from "types";

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: EventOnClickOutside) => void
) => {
  useEffect(() => {
    const listener = (event: EventOnClickOutside) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
