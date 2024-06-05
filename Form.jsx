"use client";
import React, { useRef } from "react";

export default function Form({ onAddData }) {
  const textref = useRef(null);

  const submit = (event) => {
    event.preventDefault();
    const text = textref.current.value;

    const submitData = {
      textdata: text,
    };
    console.log(submitData);
    props.onAddData(submitData);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" ref={textref} placeholder="Task Name"></input>
        <button type="submit"> Add Task</button>
      </form>
    </div>
  );
}
