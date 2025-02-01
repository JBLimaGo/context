import { useContext } from "react"; // Import useContext from react
import { CounterContext } from "../context/CounterContext"; // Import your context
import { ChangeCounter } from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext); // Use useContext to access the context value
  return (
    <div>
      <h1> Home </h1>
      <p>Valor do Contador: {counter} </p>
      {/* 3 - Alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
