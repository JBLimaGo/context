import { userContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = userContext(CounterContext);
  return (
    <div>
      <h1> Home </h1>
      <p>Valor do Contador: {counter} </p>
    </div>
  );
};

export default Home;
