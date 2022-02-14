import { ICard } from "../../classes/card";
import { Tiles } from "../../utils/constants";
import Card from "../card/card";
import Tile from "../tile/tile";

import "./board.css";
import { getRandomHand } from "../../services/card.service";
import { useEffect, useState } from "react";
import { turnOrder } from "../../utils/gameplay";

const Board = (): JSX.Element => {
  const [playerOneHand, setPlayerOneHand] = useState<ICard[]>();
  const [playerTwoHand, setPlayerTwoHand] = useState<ICard[]>();
  // HANDLE DUPLICATE CARD CASE, BOTH PLAYERS SHOULD BE ABLE TO HAVE THE SAME CARDS, BUT BOTH CARDS ARE HIGHLIGHTED WHEN PLAYER SELECTS THEM
  const [selectedCard, setSelectedCard] = useState<number | null>();
  const [playerTurn, setPlayerTurn] = useState<number>();

  useEffect(() => {
    getRandomHand().then((hand) => setPlayerOneHand(hand));
    getRandomHand().then((hand) => setPlayerTwoHand(hand));
    setPlayerTurn(turnOrder);
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
        selectCard={selectCard}
        isSelected={selectedCard === card.id && playerTurn === 0}
        key={`player1card${card.id}`}
        cardData={card}
        isDisabled={playerTurn !== 0}
      />
    );
  });

  const playerTwoHandComponents = playerTwoHand?.map((card: ICard) => {
    return (
      <Card
        selectCard={selectCard}
        isSelected={selectedCard === card.id && playerTurn === 1}
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
