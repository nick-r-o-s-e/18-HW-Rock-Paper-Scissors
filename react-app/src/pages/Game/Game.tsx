import "./Game.scss";
import { useEffect, useState } from "react";
import getRandomNum from "../../assets/helpers/randomNum";
let timeOutsIds: number[] = [];

function Game() {
  const [userPick, setUserPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const options = ["rock", "paper", "scissors"];

  const [countDown, setCountDown] = useState<number | null>();
  const initialOptionsStates = {
    disables: {
      rock: false,
      paper: false,
      scissors: false,
    },
    picked: {
      rock: false,
      paper: false,
      scissors: false,
    },
  };
  const [optionsPickedStyles, setOptionsPickedStyles] = useState(
    initialOptionsStates.picked
  );

  const [disabledStates, setDisabledStates] = useState<{
    [k: string]: boolean;
  }>(initialOptionsStates.disables);

  const [winStreak, setWinStreak] = useState(
    Number(localStorage.getItem("winStreak")) || 0
  );

  const winCheck = (
    user: string,
    computer: string
  ): "draw" | boolean | undefined => {
    if (user == computer) {
      return "draw";
    } else {
      switch (user) {
        case "rock":
          return computer == "scissors";
        case "paper":
          return computer == "rock";
        case "scissors":
          return computer == "paper";
        default:
          break;
      }
    }
  };

  const chooseOption = (
    pick: "rock" | "paper" | "scissors",
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOptionsPickedStyles((prevVal) => ({ ...prevVal, [pick]: true }));
    
    setUserPick(pick);
    setComputerPick(options[getRandomNum(0, 2)]);
    setDisabledStates(
      Object.fromEntries(
        Object.entries(disabledStates).map((option) =>
          option[0] != pick ? [option[0], true] : [option[0], false]
        )
      )
    );

    setCountDown(3);

    const temp = [2, 1];
    for (let i = 1; i < 4; i++)
      timeOutsIds.push(
        Number(
          setTimeout(() => {
            setCountDown(temp.indexOf(i) + 1);
          }, i * 1000)
        )
      );
  };

  useEffect(() => {
    localStorage.setItem("winStreak", String(winStreak));
  }, [winStreak]);

  useEffect(() => {
    if (computerPick != "") {
      timeOutsIds.push(
        setTimeout(() => {
          const res = winCheck(userPick, computerPick);
          if (!res) {
            setWinStreak(0);
          } else if (res == true) {
            setWinStreak(winStreak + 1);
          }
        }, 3300)
      );
    }
  }, [computerPick]);

  const restartGame = () => {
    setDisabledStates(initialOptionsStates.disables);
    setOptionsPickedStyles(initialOptionsStates.picked);
    setUserPick("");
    setComputerPick("");
    setCountDown(null);
    timeOutsIds.forEach((id) => clearTimeout(id));
    timeOutsIds = [];
  };

  return (
    <div className="page-container">
      <div className="game-container">
        <div className="side-div">
          <button onClick={restartGame} className="btn btn-warning restart-btn">
            Restart
          </button>
        </div>
        <div className={`game-div${userPick ? " playing" : ""}`}>
          <div className="computer-pick-div">
            <div className="computer-pick-wrapper">
              <div
                className={`computer-icon${countDown == 0 ? " picked" : ""}`}
                style={{
                  backgroundImage: "url(src/assets/images/desktop.png)",
                }}
              >
                <h5>{countDown != 0 ? countDown : ""}</h5>
              </div>
              <div
                className={`icon computer-pick${
                  countDown == 0 ? " picked" : ""
                }`}
                style={{
                  backgroundImage: `url(src/assets/images/${computerPick}.png)`,
                }}
              ></div>
              <h4>VS</h4>
            </div>
          </div>
          <div className="options">
            <button
              disabled={disabledStates.rock}
              onClick={(e) => {
                chooseOption("rock", e);
              }}
              style={{ backgroundImage: "url(src/assets/images/rock.png)" }}
              className={`option-btn icon${
                optionsPickedStyles.rock ? " picked picked-rock" : ""
              }`}
            ></button>
            <button
              disabled={disabledStates.paper}
              onClick={(e) => {
                chooseOption("paper", e);
              }}
              style={{ backgroundImage: "url(src/assets/images/paper.png)" }}
              className={`option-btn icon${
                optionsPickedStyles.paper ? " picked picked-paper" : ""
              }`}
            ></button>
            <button
              disabled={disabledStates.scissors}
              onClick={(e) => {
                chooseOption("scissors", e);
              }}
              style={{ backgroundImage: "url(src/assets/images/scissors.png)" }}
              className={`option-btn icon${
                optionsPickedStyles.scissors ? " picked picked-scissors" : ""
              }`}
            ></button>
          </div>
        </div>
        <div className="side-div">
          <div className="win-streak">
            <h4>Win streak</h4>
            <h3>{winStreak}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
