import React from "react";

interface Props {
  onClick?: () => void;
  label: string;
  className?: string;
  color?: string;
  disabled?: boolean;
}

function Button(props: Props) {
  return (
    <button
      disabled={props.disabled}
      className={`${
        props.disabled
          ? "disabled:opacity-75 cursor-not-allowed"
          : "cursor-pointer"
      } rounded-md bg-${props.color || "sky"}-500 hover:bg-${
        props.color || "sky"
      }-700 p-3 pr-6 pl-6 text-white font-bold ${props.className}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
