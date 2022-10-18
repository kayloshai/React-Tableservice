import "./DisplayNavbar.scss";
import React from "react";
import { useDataState, useDataUpdate } from "./context/dataContext";
export default function Navbar() {
  const states = useDataState();
  const setState = useDataUpdate();
  const handleReset = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="">
      {states["splitBill"] ? (
        <div className="nav-container parent">
          <button className="nav-btn child" onClick={setState["Cancel"]}>
            Cancel
          </button>
          <button className="nav-btn child" onClick={setState["Pay"]}>
            Pay
          </button>
        </div>
      ) : (
        <div className="nav-container parent">
          <button
            className="nav-btn child"
            onClick={() => {
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Cancel
          </button>
          <button className="nav-btn child" onClick={setState["Pay"]}>
            Pay
          </button>
          <button className="nav-btn child" onClick={setState["Split"]}>
            Split
          </button>
        </div>
      )}
    </div>
  );
}
