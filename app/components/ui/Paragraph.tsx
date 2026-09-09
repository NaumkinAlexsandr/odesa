import React from "react";

interface IParagraphProps {
  className: string;
  text: string;
}
export default function Paragraph({ text, className }: IParagraphProps) {
  return (
    <p className={className}>
      <span className="ml-6">{text}</span>
    </p>
  );
}
