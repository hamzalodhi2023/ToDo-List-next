"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between  items-center">
          <div className="flex justify-between w-1/3 m-5">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={deleteHandler}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      );
    });
  }
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
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
