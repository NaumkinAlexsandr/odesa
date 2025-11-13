import React from "react";
import Paragraph from "@/ui/Paragraph";
import { p } from "@/fonts/fontSize";
import List from "@/components/common/ui/List";
import { IContentTranslation } from "@/type/content";

/**
 * Рендерит блоки контента (параграфы или списки) из объекта локализации.
 *
 * ПРИНЦИП: Ключи должны быть пронумерованы СТРОГО ПОСЛЕДОВАТЕЛЬНО (p_01, p_02, p_03...).
 * Тип блока определяется его значением:
 * - string: параграф.
 * - Array<string>: список.
 *
 * @param translation Объект перевода с ключами вида p_01, p_02, ...
 * @returns Массив React-узлов (Paragraph и ul/li).
 */

export const renderContentBlocks = (
  translation: IContentTranslation,
): React.ReactNode[] => {
  const keys = Object.keys(translation);
  const contentElements: React.ReactNode[] = [];

  // 1. Извлекаем и сортируем все ключи, которые являются контентом (только p_XX)
  const contentKeys = keys
    .filter((key) => key.startsWith("p_"))
    .sort((a, b) => {
      const numA = parseInt(a.substring(2));
      const numB = parseInt(b.substring(2));
      return numA - numB;
    });

  // 2. Итерация и рендеринг
  contentKeys.forEach((key) => {
    const content = translation[key];

    // Проверяем, является ли контент строкой (параграф)
    if (typeof content === "string") {
      contentElements.push(
        <Paragraph key={key} text={content} className={`${p}`} />,
      );
      // Проверяем, является ли контент массивом (список)
    } else if (Array.isArray(content)) {
      contentElements.push(
        <ul key={key} className="list-inside list-disc">
          {content.map((item, index) => (
            <li key={`${key}-${index}`}>
              <List text={item} className={`${p} inline`} />
            </li>
          ))}
        </ul>,
      );
    }
  });

  return contentElements;
};
