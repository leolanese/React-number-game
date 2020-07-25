import React, { EventHandler, useState } from "react";
import { Numbers } from "./resources/objects";
import "./index.scss";

const NumberList = () => {
  const [flag, changeFlag] = useState(true);
  const [chosen, setChosen] = useState();
  const [multiple, setMultiple] = useState([{}]);

  const getArrayOfMultipleNumbersOfSelectedNumber = <P extends object>(
    Numbers: Array<number>,
    num: number
  ) => {
    return Numbers.filter((n) => !(n % num));
  };

  const multiplesNumber = <P extends object>(num: number) => {
    const arrayOfMultipleNumbersOfSelectedNumber = getArrayOfMultipleNumbersOfSelectedNumber(
      Numbers,
      num
    );
    const arrayOfMultipleNumbersOfSelectedNumberNoCero = [
      ...arrayOfMultipleNumbersOfSelectedNumber.slice(1, 2),
      ...arrayOfMultipleNumbersOfSelectedNumber.slice(2),
    ];
    return arrayOfMultipleNumbersOfSelectedNumberNoCero;
  };

  const Game = ({
    active,
    count,
    onClick,
    numberSelected,
  }: {
    active: boolean;
    count: number;
    onClick: EventHandler<any>;
    numberSelected: number;
  }) => {
    if (active) {
      console.log("Selected element: ", numberSelected);
      console.log(
        "Multiple of this elements (no counting 0):",
        Object.values({ multiple })[0]
      );
    }

    return (
      <>
        <p
          onClick={onClick}
          className={
            !Object.values({multiple})[0].includes(numberSelected)
              ? "box no-active"
              : `box active content-${flag}`
          }
        >
          {Object.values({ multiple })[0].includes(numberSelected)}
          {count}
        </p>
      </>
    );
  };

  return (
    <div className="image-list">
      <div className="wrapper">
        <header className="header">Please select a number:</header>

        {Numbers.map((num) => (
          <Game
            key={num.toString()}
            count={num}
            active={num === chosen}
            onClick={() => {
              setChosen(num);
              changeFlag(true);
              setMultiple(multiplesNumber(num));
            }}
            numberSelected={num}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberList;
