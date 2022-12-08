import React from "react";
import Header from "./components/Header/Header";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import CalcContextProvider from "./contexts/CalcContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CalcContextProvider>
        <Layout>
          <Header />
          <Screen />
          <Keypad />
        </Layout>
    </CalcContextProvider>
  );
}

export default App;
