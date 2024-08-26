import "./App.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;

  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}

export default function App() {
  return <Sum valueA={12} valueB={10} />;
}
