import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollRestoration() {
  const prevLocation = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (prevLocation.current && prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0); // Scroll to top when navigating to a new route
    }

    prevLocation.current = location.pathname;
  }, [location]);

  return null;
}
