import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Text from "./Text";
import Background from "./Background";
import Cards from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Text/>
      <Background/> */}
      <Cards />
    </>
  );
}

export default App;
