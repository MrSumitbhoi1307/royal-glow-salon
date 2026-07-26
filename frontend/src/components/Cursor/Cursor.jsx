import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.style.width = "14px";
    cursor.style.height = "14px";
    cursor.style.borderRadius = "999px";
    cursor.style.background = "#D4AF37";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "99999";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.boxShadow = "0 0 20px rgba(212,175,55,.8)";

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
};

export default Cursor;