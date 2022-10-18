import React from "react";
import { useDataState, useDataUpdate } from "./context/dataContext";

function FullBill({ initialMockData }) {
  const states = useDataState();
  const setStates = useDataUpdate();
  const handleChange = (index, itemCount) => {
    const newMockOrder = [...states["mockData"]];
    newMockOrder[index].Quanity = Math.max(
      newMockOrder[index].Quanity - itemCount,
      states["mockData"][index].Quantity
    );
    setStates["updateMockData"](newMockOrder);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {states["mockData"].map((record, i) => (
            <tr key={i}>
              <td>{record.Item}</td>
              <td>{record.Quantity}</td>
              <td>{record.Price}</td>
              <td>£{record.Price * record.Quantity}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>£</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default FullBill;
