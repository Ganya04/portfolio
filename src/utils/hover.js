import { useState, useEffect } from "react";

export default function useHover3d(ref, { x = 10, y = 10, z = 20 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const xCoord = ((offsetX - width / 2) / width) * 2;
    const yCoord = ((offsetY - height / 2) / height) * 2;

    setCoords({ x: xCoord, y: yCoord });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ x: 0, y: 0 }); // Reset on leave
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  const xTransform = isHovering ? coords.x * x : 0;
  const yTransform = isHovering ? coords.y * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "transform 0.5s ease";

  return { transform, transition };
}
