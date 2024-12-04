import "./App.css";

export default function App() {
  return (
    <>
      <Button
        onButtonClick={() => {
          console.log("click 1");
        }}
        color="red"
        disabled={true}
        text="Hey"
      />
      <Button
        onButtonClick={() => {
          console.log("click 2");
        }}
        disabled={false}
        text="Hi"
      />
    </>
  );
}
function Button({ color = "purple", disabled, text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      disabled={disabled}
      style={{ backgroundColor: color, color: "white" }}
    >
      {text}
    </button>
  );
}
