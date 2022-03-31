import { ICard } from "../../classes/card";
import { Tiles } from "../../utils/constants";
import Card from "../card/card";
import Tile from "../tile/tile";

import "./board.css";
import { getRandomHand } from "../../services/card.service";
import { useEffect, useState } from "react";
import { turnOrder } from "../../utils/setup";

const Board = (): JSX.Element => {
  const [playerOneHand, setPlayerOneHand] = useState<ICard[]>();
  const [playerTwoHand, setPlayerTwoHand] = useState<ICard[]>();
  const [selectedCard, setSelectedCard] = useState<ICard | null>();
  const [playerTurn, setPlayerTurn] = useState<number>(0);

  useEffect(() => {
    getRandomHand().then((hand) => setPlayerOneHand(hand));
    getRandomHand().then((hand) => setPlayerTwoHand(hand));
    setPlayerTurn(turnOrder);
  }, []);

  const tileComponents = Tiles.map((num: number) => {
    return (
      <Tile
        key={`tile${num}`}
        number={num}
        card={selectedCard ? selectedCard : null}
      />
    );
  });

  const playerOneHandComponents = playerOneHand?.map((card: ICard) => {
    return (
      <Card
        selectCard={setSelectedCard}
        isSelected={selectedCard?.id === card.id && playerTurn === 0}
        key={`player1card${card.id}`}
        cardData={card}
        isDisabled={playerTurn !== 0}
      />
    );
  });

  const playerTwoHandComponents = playerTwoHand?.map((card: ICard) => {
    return (
      <Card
        selectCard={setSelectedCard}
        isSelected={selectedCard?.id === card.id && playerTurn === 1}
        key={`player2card${card.id}`}
        cardData={card}
        isDisabled={playerTurn !== 1}
      />
    );
  });

  return (
    <div className="gameRoot">
      {playerOneHandComponents && playerTwoHandComponents ? (
        <>
          <div>
            <div className="playerLabel"> Player 1 Hand </div>
            <div className="playerHand">{playerOneHandComponents}</div>
          </div>
          <div className="boardRoot">
            <h2 className="title"> Player {playerTurn + 1} turn </h2>
            <div className="gridRoot"> {tileComponents} </div>
          </div>
          <div>
            <div className="playerLabel"> Player 2 Hand </div>
            <div className="playerHand">{playerTwoHandComponents}</div>
          </div>
        </>
      ) : (
        <div className="loading"> Loading... </div>
      )}
    </div>
  );
};

export default Board;
