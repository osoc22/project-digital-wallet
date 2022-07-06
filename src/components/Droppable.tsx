import { useEffect, useState } from "react";
import {
  Droppable as BeautifulDroppable,
  DroppableProps,
} from "react-beautiful-dnd";

// Make droppable compatible with React 18
export default function Droppable({ children, ...props }: DroppableProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) return null;

  return <BeautifulDroppable {...props}>{children}</BeautifulDroppable>;
}
