import { useEffect, useState } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  const [{ x, y }, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
}

export default CursorGlow;
