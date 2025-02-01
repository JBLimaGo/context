import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Products() {
  const { counter } = useContext(CounterContext); // Use useContext to access the context value
  return (
    <div>
      <h1> Produtos </h1>
      <p>Valor do Contador: {counter} </p>
    </div>
  );
}

export default Products;
