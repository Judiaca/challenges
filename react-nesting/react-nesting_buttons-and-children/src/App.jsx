import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Button Alpha</Button>
      <Button>Button Beta</Button>
      <Button>Button Gamma</Button>
      <Button>Button Delta</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
