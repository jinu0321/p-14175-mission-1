"use client";

import { apiFetch } from "@/lib/backend/client";
import type { PostDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id: idStr } = useParams<{ id: string }>();
  const id = Number(idStr);

  const [post, setPost] = useState<PostDto | null>(null);

  useEffect(() => {
    apiFetch(`/api/v1/posts/${id}`).then(setPost);
  }, [id]);

  if (post == null) return <div>로딩중...</div>;

  return (
    <>
      <h1>{id}번 글 수정</h1>

      <form className="flex flex-col gap-2 p-2">
        <input
          className="border p-2 rounded"
          type="text"
          name="title"
          placeholder="제목"
          maxLength={100}
          autoFocus
          defaultValue={post.title}
        />
        <textarea
          className="border p-2 rounded"
          name="content"
          placeholder="내용"
          maxLength={5000}
          rows={10}
          defaultValue={post.content}
        />
        <button className="border p-2 rounded cursor-pointer" type="submit">
          저장
        </button>
      </form>
    </>
  );
}
