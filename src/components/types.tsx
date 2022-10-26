type ChoiceType = "Rock" | "Paper" | "Scissor";

type ChoiceItem = {
  src: string;
  choice: ChoiceType;
};

type PlayState = "Start" | "Play" | "End";

type PlayerNumber = 0 | 1;

export type { ChoiceType, ChoiceItem, PlayState, PlayerNumber };
