import { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        console.log(v.products);
        setItems((prev) => {
          return v.products;
        });
      });
  }, []);

  return (
    <>
      {items.map((x) => {
        return (
          <>
            <div>{x.title}</div>
            <div>{x.description}</div>
            <div>{x.price}</div>
          </>
        );
      })}
    </>
  );
};

export default App;
