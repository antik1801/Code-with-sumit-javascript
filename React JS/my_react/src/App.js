import "./app.css"
import Clock from "./components/Clock";
import ClockList from "./components/ClockList";

function App() {
  let quantities = [1,2,3];
  return (
   <div className="Container">
      <ClockList quantity={quantities}/>
   </div>
  );
}

export default App;
