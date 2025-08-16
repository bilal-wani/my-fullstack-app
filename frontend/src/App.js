import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://my-backend-bpj3.onrender.com/api/hello")
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return <h1>Bilal: {data}</h1>;
}

export default App;
