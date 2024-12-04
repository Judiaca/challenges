import "./App.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
