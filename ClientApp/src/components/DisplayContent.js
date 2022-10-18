import React from "react";
import { useDataState } from "./context/dataContext";
export default function ScreenContent() {
  const states = useDataState();
  return (
    <div>
      SplitBill State:
      {states["splitBill"] ? <p>SplitBill</p> : <p>not SplitBill</p>}
      Paybill State:{states["payBill"] ? <p>Paybill</p> : <p>not Paybill</p>}
      Cancel State:{states["cancel"] ? <p>Cancel</p> : <p>not Cancel</p>}
    </div>
  );
}
