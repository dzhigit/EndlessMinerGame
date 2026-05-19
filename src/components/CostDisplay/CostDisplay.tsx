import styles from "./CostDisplay.module.css";
import NumericDisplay from "../NumericDisplay/NumericDisplay";

type Props = {
  cost: number
}

const CostDisplay = ({ cost }: Props) => (
  <div className={styles.CostDisplay} data-testid="CostDisplay">
    Cost:{" "}
    <span id="cost-value">
      <NumericDisplay value={cost} />
    </span>
  </div>
);

export default CostDisplay;