import React, { useState } from "react";

import rock from "../resources/rock.gif";
import paper from "../resources/paper.gif";
import scissor from "../resources/scissor.gif";
import Choice from "./Choice";
import Button from "./Button";
import { ChoiceItem, ChoiceType, PlayerNumber } from "./types";

interface Props {
  onEnd: (winner: PlayerNumber | null) => void;
}

const CHOICE_LIST: ChoiceItem[] = [
  {
    src: rock,
    choice: "Rock",
  },
  {
    src: paper,
    choice: "Paper",
  },
  {
    src: scissor,
    choice: "Scissor",
  },
];

function Gaming(props: Props) {
  const [choice, setChoice] = useState<ChoiceType>();
  const [playerNum, setPlayerNum] = useState<PlayerNumber>(0);
  const [lockedChoices, setLockedChoices] = useState<ChoiceType[]>([]);

  const lockChoice = () => {
    if (choice) {
      const newLockedChoices = [...lockedChoices];
      newLockedChoices.push(choice);
      setLockedChoices(newLockedChoices);
      setChoice(undefined);

      if (playerNum === 0) {
        setPlayerNum(1);
      } else {
        setPlayerNum(0);
        compareChoices(newLockedChoices);
      }
    }
  };

  const compareChoice = (a: ChoiceType, b: ChoiceType) => {
    if (a === b) return null;
    if (a === "Rock" && b === "Paper") return b;
    if (a === "Rock" && b === "Scissor") return a;
    if (a === "Paper" && b === "Rock") return a;
    if (a === "Paper" && b === "Scissor") return b;
    if (a === "Scissor" && b === "Rock") return b;
    if (a === "Scissor" && b === "Paper") return a;
  };

  const compareChoices = (choices: ChoiceType[]) => {
    if (choices.length > 1) {
      const p1Choice = choices[0];
      const p2Choice = choices[1];
      const result = compareChoice(p1Choice, p2Choice);

      if (result === p1Choice) props.onEnd(0);
      else if (result === p2Choice) props.onEnd(1);
      else props.onEnd(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-6 font-bold"> Player {playerNum + 1}</p>
      <p className="text-2xl">
        Choose your <b>fighter</b>!
      </p>
      <div className="flex flex-row justify-center align-items-center object-center">
        {CHOICE_LIST.map((choiceItem) => (
          <Choice
            key={choiceItem.choice}
            src={choiceItem.src}
            choice={choiceItem.choice}
            onSelected={setChoice}
            selected={choice === choiceItem.choice}
          />
        ))}
      </div>
      <Button
        className="w-40"
        onClick={lockChoice}
        disabled={!choice}
        label="Lock it in!"
      />
    </div>
  );
}

export default Gaming;
