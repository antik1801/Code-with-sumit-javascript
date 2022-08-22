
import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './component/Checkout'
function App() {
  return (
    <Router>
    <div className="app">

           <switch> 
           {/* <Route path="/checkout">  */}
            {/* <Header /> 
             <Checkout />   */}
           {/* </Route>  */}
          {/* <Route path="/" > */}

                <Header />
            <Home />   
          
           </switch> 
    </div>
    </Router>
  );
}

export default App;
