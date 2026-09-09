import { useMemo } from "react";
import { IEventData } from "@/lib/translations/events/allEvents";

/**
 * Хук для фильтрации и сортировки предстоящих событий.
 * @param events - Объект событий для текущего языка.
 * @param limit - Максимальное количество событий для возврата (для домашней страницы).
 * @returns Отсортированный массив предстоящих событий.
 */

export const useUpcomingEvents = (
  events: Record<string, IEventData>,
  limit?: number, // Ограничение на количество (необязательный параметр)
): IEventData[] => {
  const now = useMemo(() => new Date(), []); // Текущая дата, вычисленная один раз
  const upcomingEvents = useMemo(() => {
    let filteredAndSortedEvents = Object.values(events)
      .filter((event) => {
        // Проверка, что дата события больше или равна текущему моменту
        return new Date(event.isoDate) >= now;
      })
      .sort((a, b) => {
        // Сортировка по возрастанию даты (самое раннее событие первым)
        return new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime();
      }); // Применяем ограничение, если оно задано

    if (limit && limit > 0) {
      filteredAndSortedEvents = filteredAndSortedEvents.slice(0, limit);
    }

    return filteredAndSortedEvents;
  }, [events, now, limit]); // Зависимости: пересчитываем, если изменился список событий или лимит.

  return upcomingEvents;
};
