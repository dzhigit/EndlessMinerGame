import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import PropTypes from "prop-types";
import styles from "./CostDisplay.module.css";
import NumericDisplay from "../NumericDisplay/NumericDisplay.jsx";
const CostDisplay = ({ cost }) => (_jsxs("div", { className: styles.CostDisplay, "data-testid": "CostDisplay", children: ["Cost:", " ", _jsx("span", { id: "cost-value", children: _jsx(NumericDisplay, { value: cost }) })] }));
CostDisplay.propTypes = { cost: PropTypes.number.isRequired };
CostDisplay.defaultProps = {};
export default CostDisplay;
//# sourceMappingURL=CostDisplay.js.map