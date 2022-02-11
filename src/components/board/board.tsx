import { ICard } from "../../classes/card";
import { Tiles } from "../../utils/constants";
import Card from "../card/card";
import Tile from "../tile/tile";

import "./board.css";
import { getRandomHand } from "../../services/card.service";
import { useEffect, useState } from "react";

const Board = (): JSX.Element => {
  const [playerOneHand, setPlayerOneHand] = useState<ICard[]>();
  const [playerTwoHand, setPlayerTwoHand] = useState<ICard[]>();
  const [selectedCard, setSelectedCard] = useState<number | null>();

  useEffect(() => {
    getRandomHand().then((hand) => setPlayerOneHand(hand));
    getRandomHand().then((hand) => setPlayerTwoHand(hand));
  }, []);

  const selectCard = (cardId: number) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardId);
    }
  };

  const tileComponents = Tiles.map((num: number) => {
    return <Tile key={`key${num}`} number={num} />;
  });

  const playerOneHandComponents = playerOneHand?.map((card: ICard) => {
    return (
      <Card
        isSelected={selectedCard === card.id}
        selectCard={selectCard}
        key={`player1card${card.id}`}
        cardData={card}
      />
    );
  });

  const playerTwoHandComponents = playerTwoHand?.map((card: ICard) => {
    return (
      <Card
        selectCard={selectCard}
        isSelected={selectedCard === card.id}
        key={`player2card${card.id}`}
        cardData={card}
      />
    );
  });

  return (
    <div className="gameRoot">
      {playerOneHandComponents && playerTwoHandComponents ? (
        <>
          <div className="playerHand">{playerOneHandComponents}</div>
          <div className="boardRoot">
            <h2 className="title"> Triple Trio </h2>
            <div className="gridRoot"> {tileComponents} </div>
          </div>
          <div className="playerHand">{playerTwoHandComponents}</div>
        </>
      ) : (
        <div className="loading"> Loading... </div>
      )}
    </div>
  );
};

export default Board;
