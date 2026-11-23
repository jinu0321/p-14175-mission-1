"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { id: idStr } = useParams<{ id: string }>();
  const id = Number(idStr);

  return (
    <>
      <h1>{id}번 글 수정</h1>
    </>
  );
}
