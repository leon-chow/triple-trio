import Card from "../card/card";
import { Tiles } from "../constants";
import Tile from "../tile/tile";

import "./board.css";

const Board = (): JSX.Element => {
  const tileComponents = Tiles.map((num: number) => {
    return <Tile number={num} />;
  });
  return (
    <div className="boardRoot">
      <h2 className="title"> Welcome to Triple Trio </h2>
      <div className="gridRoot"> {tileComponents} </div>
      <Card />
    </div>
  );
};

export default Board;
