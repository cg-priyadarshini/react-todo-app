import { useState, useEffect, useRef } from "react";

interface TextEllipsisProps {
  text: string;
  maxLength: number;
}

function useTextEllipsis({ text, maxLength }: TextEllipsisProps) {
  const [ellipsisText, setEllipsisText] = useState(
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  );
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.width > element.clientWidth) {
        // Calculate the number of characters to display before ellipsis
        let ellipsisIndex = text.length;
        while (
          textRef.current!.scrollWidth > element.clientWidth &&
          ellipsisIndex > 0
        ) {
          ellipsisIndex--;
          textRef.current!.textContent =
            text.substring(0, ellipsisIndex) + "...";
        }
        setEllipsisText(text.substring(0, ellipsisIndex) + "...");
      } else {
        setEllipsisText(text);
      }
    }
  }, [text, maxLength]);

  return ellipsisText;
}

export default useTextEllipsis;
