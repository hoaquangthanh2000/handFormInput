import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Information from "./page/Information";
import Test1 from "./page/Test1";

function App() {
  return (
    <div className="App flex justify-center items-center flex-col mb-96 h-screen bg-[url('https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?w=2000')]">
      <div className="text-center font-bold text-5xl text-red-500">
        Handle Form Input
      </div>
      {/* <Information /> */}
      <Test1 />
    </div>
  );
}

export default App;
