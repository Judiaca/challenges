import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {" "}
           <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Add more product details as needed */}
        </li>
      ))}
    </ul>
  );
}
