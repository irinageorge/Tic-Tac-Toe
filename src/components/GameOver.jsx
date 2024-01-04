export default function GameOver({ winner, onResrtart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner.toUpperCase()} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onResrtart}>Rematch!</button>
      </p>
    </div>
  );
}
