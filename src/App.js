import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import products from "./products.json";
import Product from "./Components/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => item.id === product.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      <div className="container">
        {products.map((product) => (
          <Product
            basket={basket}
            total={total}
            money={money}
            setBasket={setBasket}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <button onClick={resetBasket}>Sepeti sıfırla</button>
    </div>
  );
}

export default App;
