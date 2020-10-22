import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
