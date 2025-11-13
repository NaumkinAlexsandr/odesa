"use client";
import { sidebar_h3, sidebar_li } from "@/fonts/fontSize";
import { ISidebarProps } from "@/type/interface";
import Link from "next/link";

export default function Sidebar({ sections, title }: ISidebarProps) {
  return (
    <aside className="fixed top-20 max-h-[80vh] w-[200px] overflow-y-auto rounded-lg bg-gray-50 p-2 shadow-md">
      <h3 className={`${sidebar_h3} mb-3 border-b pb-2`}>{title}</h3>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li
              key={section.id}
              className={`my-2 border-b border-gray-200 ${index === sections.length - 1 ? "border-b-0" : "pb-2"} `}
            >
              <Link
                href={`#${section.id}`}
                className={`${sidebar_li} transition duration-150 ease-in-out hover:text-blue-600`}
              >
                {section.titleSection}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
