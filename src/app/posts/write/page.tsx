"use client";

export default function Page() {
  return (
    <>
      <h1>글쓰기</h1>

      <form className="flex flex-col gap-2 p-2">
        <input
          className="border p-2 rounded"
          type="text"
          name="title"
          placeholder="제목"
          maxLength={100}
          autoFocus
        />
        <textarea
          className="border p-2 rounded"
          name="content"
          placeholder="내용"
          maxLength={5000}
          rows={10}
        />
        <button className="border p-2 rounded cursor-pointer" type="submit">
          저장
        </button>
      </form>
    </>
  );
}
