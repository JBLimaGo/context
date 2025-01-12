import { useContext } from "react"; // Import useContext from react
import { CounterContext } from "../context/CounterContext"; // Import your context

const Home = () => {
  const { counter } = useContext(CounterContext); // Use useContext to access the context value
  return (
    <div>
      <h1> Home </h1>
      <p>Valor do Contador: {counter} </p>
    </div>
  );
};

export default Home;
