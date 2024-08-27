import { useState } from "react";
import "./App.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevIsActive) => !prevIsActive);
    // Check that the value changes correctly.
    console.log("isActive after set:", isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
