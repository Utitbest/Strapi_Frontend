import { useState } from "react";
export default function ExpandableText({ text, wordLimit = 50 }) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const words = text.split(" ");
  const isTruncated = words.length > wordLimit;

  const displayText = expanded
    ? text
    : words.slice(0, wordLimit).join(" ") + (isTruncated ? "..." : "");

  return (
    <>
      {displayText}
      {isTruncated && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="ml-2 text-amber-500 hover:text-amber-600 font-semibold"
        >
          Continue reading
        </button>
      )}
    </>
  );
}
