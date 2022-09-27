import { useState } from "react";

function Tasks(props) {
  const { setAllChecked } = props;
  const [drinkChecked, setDrinkChecked] = useState(false);
  const [walkChecked, setWalkChecked] = useState(false);
  const [brushFlossChecked, setBrushFlossChecked] = useState(false);

  const updateState = (action) => {
    console.log("entered--", action);
    switch (action) {
      case "drink":
        setDrinkChecked(!drinkChecked);
        break;
      case "walk":
        setWalkChecked(!walkChecked);
        break;
      default:
        setBrushFlossChecked(!brushFlossChecked);
        break;
    }
  };

  const checkState = () => {
    console.log({ drinkChecked, walkChecked, brushFlossChecked });
    if (drinkChecked && walkChecked && brushFlossChecked) {
      console.log("true");
      setAllChecked(true);
    }
  };

  return (
    <div>
      <header>Tasks Today</header>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={drinkChecked}
              onChange={() => {
                updateState("drink");
              }}
            />
            Drink water
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={walkChecked}
              onChange={() => {
                updateState("walk");
              }}
            />
            Go for a walk
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={brushFlossChecked}
              onChange={() => {
                updateState("brushAndFloss");
              }}
            />
            Brush and floss
          </label>
        </li>
        <li>
          <button onClick={checkState}>Check Status</button>
        </li>
      </ul>
    </div>
  );
}

export default Tasks;
