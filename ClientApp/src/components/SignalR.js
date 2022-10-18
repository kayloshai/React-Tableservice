import * as signalR from "@microsoft/signalr";
import React from "react";

export default function SignalR() {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chathub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  async function start() {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
      setTimeout(start, 5000);
    }
  }
  connection.onclose(async () => {
    await start();
  });

  return (
    <>
      <div>SignalR</div>
    </>
  );
}
