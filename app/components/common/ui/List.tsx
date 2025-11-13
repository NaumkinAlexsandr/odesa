import React from "react";

interface IListProps {
  className: string;
  text: string;
}
export default function List({ text, className }: IListProps) {
  return <span className={className}>{text}</span>;
}
