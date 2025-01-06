import Input from "./components/Input";
import "./App.css";
import "./index.css";
import TodoList from "./components/TodoList";
import Lifecycle from "./components/Lifecycle";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Greetings from "./components/Greetings";
// import Counter from "./components/Counter";
// import TailwindButton from "./components/Button";

// export bebas mau diatas atau bawah, tapi nanti kalo dalam komponent akan berpengaruh dari sisi importnya
function App() {
  // console.log("parent app");
  return (
    // dalam return JSX / TSX wajib untuk HANYA punya 1 buah return
    // react fragment <>
    <>
      <Lifecycle />
      {/* <TodoList /> */}
      {/* <Input /> */}
      {/* <Counter />
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1> */}
      {/* <div>
        <h1>tes</h1>
        <h1>tes 2</h1>
      </div> */}
      {/* greetings dari component dan juga dipanggil beberapa kali */}
      {/* <Greetings name="Jakarta" />
      <Greetings name="berlin" /> */}
      {/* <TailwindButton>Click me</TailwindButton> */}

      {/* <h1></h1> */}
    </>
  );
}
export default App;

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React coba testes</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
