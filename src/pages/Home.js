//import { useContext } from "react"; // Import useContext from react
//import { CounterContext } from "../context/CounterContext"; // Import your context

import { ChangeCounter } from "../components/ChangeCounter";

// 4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext); // Use useContext to access the context value
  const { counter } = useCounterContext();

  // 5 Constext mais complexo
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}> Home </h1>
      <p>Valor do Contador: {counter} </p>
      {/* 3 - Alterando valor contexto */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo*/}
      <div>
        <button onClick={() => setTitleColor("RED")}> Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}> Azul</button>
      </div>
    </div>
  );
};

export default Home;
