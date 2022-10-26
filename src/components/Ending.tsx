import React from "react";
import supaHot from "../resources/supa-hot.gif";
import Button from "./Button";
import { PlayerNumber } from "./types";

interface Props {
  onPlay?: () => void;
  winner: PlayerNumber | null;
}

function Ending(props: Props) {
  console.log(props.winner);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-10 font-bold text-4xl">
        {props.winner !== null
          ? `Player ${props.winner + 1} won!`
          : "You tied, try again!"}
      </p>

      <img src={supaHot} alt="Rock Paper Scissors!" className="w-80 mb-10" />
      <Button className="w-40" onClick={props.onPlay} label="Play again!" />
    </div>
  );
}

export default Ending;
