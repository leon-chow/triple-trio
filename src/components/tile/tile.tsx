import "./tile.css";

const Tile = (props: { number: number }) => {
  return <div className="tile"> {props.number} </div>;
};

export default Tile;
