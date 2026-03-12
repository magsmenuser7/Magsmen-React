// ScrollToTopWithHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopWithHash({ headerOffset = 80 }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // small delay lets the page render before scrolling to element
    const scroll = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          const target = Math.max(elTop - headerOffset, 0);
          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }
      }
      // default: go to top
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    // timeout helps when components render asynchronously
    const t = setTimeout(scroll, 15);
    return () => clearTimeout(t);
  }, [pathname, hash, headerOffset]);

  return null;
}
