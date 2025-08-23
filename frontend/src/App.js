import { useEffect, useState } from "react";

// const deployment = process.env.NODE_ENV === "development";
const development = false; // Assuming you want to set this to true for local development

  const serverURL = development
    ? "https://refactored-capybara-pw56x4w99x6295r-5000.app.github.dev"
    : "https://my-backend-bpj3.onrender.com";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${serverURL}/api/products`) // notice no full URL, proxy handles it
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
          </li>
          
        ))}
      </ul>
      <p> Going Great</p>
    </div>
  );
}

function AppOld() {
  const [data, setData] = useState("");



  useEffect(() => {
    // fetch("https://my-backend-bpj3.onrender.com/api/hello")
    fetch(`${serverURL}/api/hello`)
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return <h1>Bilal: {data}</h1>;
}

export default App;
