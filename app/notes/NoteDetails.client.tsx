"use client";

import css from "@/app/page.module.css";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NoteDetailsClient() {
  const { id } = useParams(); // <-- отримуємо динамічний id тут!

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !data) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>Note title</h2>
        </div>
        <p className={css.content}>Note content</p>
        <p className={css.date}>Created date</p>
      </div>
    </div>
  );
}
