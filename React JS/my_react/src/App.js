import "./app.css"
import Clock from "./components/Clock";

function App() {
  console.log("App component render");
  return (
   <div className="Container">Hello
    
      <Clock />
   </div>
  );
}

export default App;
