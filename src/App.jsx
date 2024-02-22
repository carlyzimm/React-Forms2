import { useState } from "react";
import "./App.css";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";

function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

export default App;
