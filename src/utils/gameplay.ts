import { Card } from "../classes/card";

export const turnOrder = (): number => {
  if (Math.round(Math.random()) === 0) {
    return 0;
  } else {
    return 1;
  }
}

export const generateRandomHand = (): Card[] => {
    return [];
}
