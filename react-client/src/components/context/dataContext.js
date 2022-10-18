import React, { useContext } from "react";
import logo from "./logo.svg";
import initialMockData from "./mockData";

const dataContext = React.createContext();
const dataUpdateContext = React.createContext();

//exposed custom hooks
export function useDataState() {
  return useContext(dataContext);
}
export function useDataUpdate() {
  return useContext(dataUpdateContext);
}
export function useDataStyles(darkTheme) {
  const dataStyles = {
    backgroundColor: darkTheme ? "#99A3A4 " : "#CCC",
    color: darkTheme ? "#CCC" : "#333 ",
    padding: "0",
    margin: "0",
  };
  return dataStyles;
}
export function useDataLogo() {
  return logo;
}

export function DataProvider({ children }) {
  const [darkTheme, setDarkTheme] = React.useState(true);
  const [splitBill, setSplitBill] = React.useState(false);
  const [payBill, setPayBill] = React.useState(false);
  const [cancel, setCancel] = React.useState(false);
  const [mockData, setMockData] = React.useState(initialMockData);
  const [totalOrder, setTotalOrder] = React.useState();
  const [orderPaid, setOrderPaid] = React.useState();
  const states = {
    darkTheme: darkTheme,
    splitBill: splitBill,
    payBill: payBill,
    cancel: cancel,
    mockData: mockData,
    initialMockData: initialMockData,
    totalOrder: totalOrder,
    orderPaid: orderPaid,
    logo: logo,
  };
  const methods = {
    toggleTheme: toggleTheme,
    Split: toggleSplit,
    Pay: togglePay,
    Cancel: toggleCancel,
    updateMockData: updateMockData,
    setDarkTheme: setDarkTheme,
    setTotalOrder: setTotalOrder,
    setOrderPaid: setOrderPaid,
  };
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  function toggleSplit() {
    setSplitBill((prevSplitBill) => !prevSplitBill);
  }
  function togglePay() {
    setPayBill((prevPayBill) => !prevPayBill);
  }
  function toggleCancel() {
    setSplitBill((prevSplitBill) => !prevSplitBill);
  }
  function updateMockData(data) {
    setMockData(data);
  }
  return (
    <dataContext.Provider value={states}>
      <dataUpdateContext.Provider value={methods}>
        {children}
      </dataUpdateContext.Provider>
    </dataContext.Provider>
  );
}
