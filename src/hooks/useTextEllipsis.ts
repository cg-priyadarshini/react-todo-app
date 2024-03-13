import { useState, useEffect } from "react";

interface TextEllipsisProps {
  text: string | "";
  maxLength: number;
  showTooltip: boolean;
}
// This hook is used to truncate text if text length is greater than maxLength
const useTextEllipsis = ({
  text = "",
  maxLength = 80,
  showTooltip = false,
}: TextEllipsisProps) => {
  const [ellipsisText, setEllipsisText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength - 3);
      setEllipsisText(truncatedText + "...");
    } else {
      setEllipsisText(text);
    }
  }, [text, maxLength]);

  const tooltipContent = showTooltip && text.length > maxLength ? text : null;

  return { ellipsisText, tooltipContent };
};

export default useTextEllipsis;
