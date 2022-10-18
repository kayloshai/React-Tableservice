import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { useDataState, useDataUpdate } from "./context/dataContext";

function SplitBill() {
  const states = useDataState();
  const setStates = useDataUpdate();
  const decrementItem = (index, itemCount) => {
    const newMockOrder = [...states["mockData"]];
    newMockOrder[index].Quantity = Math.max(
      newMockOrder[index].Quantity - itemCount,
      0
    );
    setStates["updateMockData"](newMockOrder);
  };
  const incrementItem = (index, itemCount) => {
    const newMockOrder = [...states["mockData"]];
    newMockOrder[index].Quantity = Math.max(
      newMockOrder[index].Quantity + itemCount,
      0
    );
    setStates["updateMockData"](newMockOrder);
  };

  const handleTotalOrder = () => {
    if (states["orderPaid"]) {
      setStates["setTotalOrder"](0);
    } else {
      let total = 0;
      states["mockData"].forEach((key, index) => {
        total += key["Price"] * key["Quantity"];
      });
      setStates["setTotalOrder"](total);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Order Total:</h1>
        </Col>
        <Col>
          {useEffect(() => {
            handleTotalOrder();
          }, [incrementItem, decrementItem, setStates["setTotalOrder"]])}
          <h1>£{states["totalOrder"]}</h1>
        </Col>
      </Row>
      <Row style={{ overflow: "scroll", height: "600px" }}>
        <Col>
          {states["mockData"].map((record, i) => (
            <Item
              key={i}
              img={record.Image}
              record={record}
              index={i}
              orderPaid={states["orderPaid"]}
              incrementItem={
                <button
                  disabled={states["orderPaid"]}
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => incrementItem(i, 1)}
                >
                  +
                </button>
              }
              decrementItem={
                <button
                  disabled={states["orderPaid"]}
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => decrementItem(i, 1)}
                >
                  -
                </button>
              }
            />
          ))}
        </Col>
      </Row>
    </>
  );
}
export default SplitBill;
