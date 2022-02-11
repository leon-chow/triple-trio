import { ICard } from "../../classes/card";
import Card from "../card/card";
import { Tiles } from "../../utils/constants";
import Tile from "../tile/tile";

import "./board.css";
import { getRandomHand } from "../../services/card.service";
import { useEffect, useState } from "react";

const Board = (): JSX.Element => {
  const [playerOneHand, setPlayerOneHand] = useState<ICard[]>();
  const [playerTwoHand, setPlayerTwoHand] = useState<ICard[]>();

  useEffect(() => {
    getRandomHand().then((hand) => setPlayerOneHand(hand));
    getRandomHand().then((hand) => setPlayerTwoHand(hand));
  }, []);

  const tileComponents = Tiles.map((num: number) => {
    return <Tile key={`key${num}`} number={num} />;
  });

  return (
    <div className="gameRoot">
      <div className="playerHand">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="boardRoot">
        <h2 className="title"> Triple Trio </h2>
        <div className="gridRoot"> {tileComponents} </div>
      </div>
      <div className="playerHand">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Board;
