import React, { useState } from "react";
import { ChoiceType } from "./types";

interface Props {
  src: string;
  choice: ChoiceType;
  selected?: boolean;
  onSelected?: (choice: ChoiceType) => void;
}

function Choice(props: Props) {
  return (
    <div
      className={`cursor-pointer m-10 text-center rounded-md p-6 text-white ${
        props.selected
          ? "bg-red-500 hover:bg-red-700"
          : "bg-sky-500 hover:bg-sky-700"
      }`}
      onClick={() => {
        if (props.onSelected) props.onSelected(props.choice);
      }}
    >
      <img
        src={props.src}
        alt={props.choice}
        className="w-80 h-60 object-cover object-center"
      />
      <p className="font-bold text-2xl mt-6">{props.choice}</p>
    </div>
  );
}

export default Choice;
