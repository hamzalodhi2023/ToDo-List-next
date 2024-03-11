"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);
  };
  return (
    <>
      <h1 className="bg-black p-5 text-white text-5xl font-bold text-center">
        Hamza Khan Lodhi's ToDo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
        />
        <button
          className="bg-black
          text-white
          px-4 py-3 text-2xl
          font-bold rounded
          m-5
        "
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default page;
