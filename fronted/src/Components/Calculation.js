import React, { useState } from "react";

const Calculation = ({ coin }) => {
  const [userMoney, setUserMoney] = useState("");
  const result = userMoney / coin.market_data.current_price.usd;
  const calculationMessage = isNaN(result) ? (
    <div className="error">Please enter valid number</div>
  ) : (
    <div className="succes">{`You can buy ${result.toFixed(2)} ${
      coin.name
    }`}</div>
  );
  return (
    <div className=" calculation">
      <input
        className=" calculation"
        type="text"
        placeholder="Please type the amount"
        onChange={(e) => setUserMoney(e.target.value)}
      ></input>
      {calculationMessage}
    </div>
  );
};

export default Calculation;
