import Order from "./components/Order";
import SignalR from "./components/SignalR";

const AppRoutes = [
  {
    index: true,
    element: <Order />,
  },
  {
    path: "/signalr",
    element: <SignalR />,
  },
];

export default AppRoutes;
