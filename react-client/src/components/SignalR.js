import * as signalR from "@microsoft/signalr";
import React, {useState} from "react";

export default function SignalR() {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(" https://localhost:7258/chathub")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.on("ReceiveMessage", (message) => {
        console.log(message);
    });

    async function start() {
        try {
            await connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    }

    async function sendMessage() {
        await connection.send("receiveMessage", "Hello World!")
    }

    connection.onclose(async () => {
        await start();
    });

    start();

    return (
        <>
            <div>SignalR</div>
            <button onClick={sendMessage}>SEND AWAY!!!</button>
        </>
    );
}
