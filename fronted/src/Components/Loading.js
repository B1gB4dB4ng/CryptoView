import React from "react";
import loading from "../img/loading.gif";
export const Loading = () => {
  return (
    <div className="loadingImg">
      <img src={loading} alt="on loading process" />
    </div>
  );
};
