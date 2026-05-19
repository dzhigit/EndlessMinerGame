import React from "react";
import styles from "./NumericDisplay.module.css";

type Props = {
  value: number;
  shortForm?: boolean;
};

function formatNumber(number = 0, shortForm = true) {
  if (shortForm) {
    const exponent = Math.floor(Math.log10(Math.abs(Math.max(number, 1))));
    const exponent3 = Math.floor(exponent / 3) * 3;

    const prefixes = [
      "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "O", "N",
      "D", "UD", "DD", "TD", "QaD", "QiD", "SxD", "SpD", "OD", "ND", "V"
    ];

    if (Math.abs(number) < 1000) {
      return Math.round(number).toString();
    } else {
      const mantissa = number / Math.pow(10, exponent3);
      const roundedNumber = mantissa.toPrecision(3);
      return Number(roundedNumber).toString() + prefixes[exponent3 / 3];
    }
  }

  return Math.round(number).toString();
}

const NumericDisplay = ({ value, shortForm }: Props) => (
  <span className={styles.NumericDisplay}>
    {formatNumber(value, shortForm)}
  </span>
);

export default NumericDisplay;