import "./App.css";

// Define the Greeting component
function Greeting({ name }) {
  // Conditional rendering: check if the name is one of the coaches
  if (
    name === "Klaus" ||
    name === "Sven" ||
    name === "Jan" ||
    name === "Gimena"
  ) {
    return <h1>Hello, Coach!</h1>;
  }

  // Default greeting
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  // Replace the default heading with the Greeting component ands pass a name prop
  return <Greeting name="Horst" />;
}
