export default function Link({ href, children }) {
  return (
    <a className="navigation_link" href={href}>
      {children}
    </a>
  );
}
