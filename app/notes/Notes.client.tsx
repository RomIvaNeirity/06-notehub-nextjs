"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import type { Note } from "@/types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export default function NotesClient() {
  const { data } = useQuery<FetchNotesResponse>({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1, ""),
  });

  if (!data) return null;

  return <NoteList notes={data.notes} />;
}
