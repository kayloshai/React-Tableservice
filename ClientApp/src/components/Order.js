import React, { useState } from "react";
import "./PaymentLayout.scss";
import SplitBill from "./SplitBill";
import FullBill from "./FullBill";
import { useDataState, useDataUpdate } from "./context/dataContext";
import DisplayNavbar from "./DisplayNavbar";
function PaymentLayout() {
    const states = useDataState();
    const setStates = useDataState();
    return (
        <div>
            <div>
                {states["splitBill"] ? (
                    <>
                        <SplitBill />
                        <DisplayNavbar />
                    </>
                ) : (
                    <>
                        {states["mockData"].map((i) => { })}
                        <FullBill />
                        <DisplayNavbar />
                    </>
                )}
            </div>
        </div>
    );
}
export default PaymentLayout;
