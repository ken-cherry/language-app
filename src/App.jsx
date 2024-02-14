import { useState } from "react";

import "./App.css";
import { English, German, Cuban } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <English />
      {/* <German />
      <Cuban /> */}
    </>
  );
}

export default App;
