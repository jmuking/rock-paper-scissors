import React, { useState } from "react";
import Ending from "./components/Ending";
import Gaming from "./components/Gaming";
import Landing from "./components/Landing";
import { PlayerNumber, PlayState } from "./components/types";

function App() {
  const [playState, setPlayState] = useState<PlayState>("Start");
  const [winner, setWinner] = useState<PlayerNumber | null>(null);

  const startPlay = () => {
    setPlayState("Play");
  };

  const endPlay = (winner: PlayerNumber | null) => {
    setWinner(winner);
    setPlayState("End");
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      {playState === "Start" && <Landing onPlay={startPlay} />}
      {playState === "Play" && <Gaming onEnd={endPlay} />}
      {playState === "End" && <Ending winner={winner} onPlay={startPlay} />}
    </div>
  );
}

export default App;
