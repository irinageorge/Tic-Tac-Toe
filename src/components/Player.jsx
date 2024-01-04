import { useState } from "react";

export default function Player({
  initialPlayerName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEdditing, setIsEdditing] = useState(false);

  function handleEdit() {
    setIsEdditing((editing) => !editing);
    if (isEdditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEdditing ? "Save" : "Edit"}</button>
    </li>
  );
}
