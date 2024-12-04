import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 101,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 102,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 103,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 104,
      name: "🍉 Watermelon",
      color: "green",
    },
    {
      id: 105,
      name: "🍇 Grape",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <Card
            key={fruit.id}
            name={fruit.name}
            className={`card--${fruit.color}`}
          />
        );
      })}
    </div>
  );
}
