import "./App.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Moin</h2>
      <label htmlFor="some-input"> Your name</label>
      <input id="some-input" type="text" />
      <a href="https://en.wikipedia.org/wiki/Moin" className="article__link">
        Moin, moi or mojn
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
