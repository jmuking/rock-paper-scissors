import React from "react";
import logo from "../resources/logo.png";
import Button from "./Button";

interface Props {
  onPlay?: () => void;
}

function Landing(props: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="Rock Paper Scissors!" className="w-80 mb-10" />
      <Button className="w-40" onClick={props.onPlay} label="Play" />
    </div>
  );
}

export default Landing;
