import { useState, useEffect } from "react";

interface TextEllipsisProps {
  text: string | "";
  maxLength: number;
  showTooltip: boolean;
}
const useTextEllipsis = ({
  text = "",
  maxLength = 80,
  showTooltip = false,
}: TextEllipsisProps) => {
  const [ellipsisText, setEllipsisText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength - 3); // Account for ellipsis
      setEllipsisText(truncatedText + "...");
    } else {
      setEllipsisText(text);
    }
  }, [text, maxLength]);

  const tooltipContent = showTooltip && text.length > maxLength ? text : null;

  return { ellipsisText, tooltipContent };
};

export default useTextEllipsis;
