import { GameContext } from "~/context/game-context";
import styles from "~/app/score.module.css";
import { useContext } from "react";

export default function Score(
  { name }: { name?: string } = { name: "player" }
) {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      {name}
      <div>{score}</div>
    </div>
  );
}