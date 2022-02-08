import "./card.css";

const Card = (): JSX.Element => {
  return (
    <div className="cardRoot">
      <div className="numbersBox">
        <div className="numberBoxRowOdd"> 1 </div>
        <div className="numberBoxRowEven"> 23 </div>
        <div className="numberBoxRowOdd"> 4 </div>
      </div>
    </div>
  );
};

export default Card;
