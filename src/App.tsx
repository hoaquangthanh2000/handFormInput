import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Information from "./page/Information";

function App() {
  return (
    <div className="App flex justify-center items-center flex-col mb-96">
      <div className="text-center font-bold text-5xl text-red-500">
        Handle Form Input
      </div>
      <Information />
    </div>
  );
}

export default App;
