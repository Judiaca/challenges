import "./App.css";

// Define the Smiley component
function Smiley({ isHappy }) {
  // Render a happy or sad smiley based on the isHappy prop
  return <h1>{isHappy ? "😊" : "😢"}</h1>;
}

export default function App() {
  return <Smiley isHappy={true} />; // Change the value to false to see the sad smiley
}
