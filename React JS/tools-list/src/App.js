import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import Todo from "./MyComponents/Todo";


function App() {
  return (
   <>
 <Header title="My Todo List" Searchbar={false}/>
 <Todos/>
 <Footer/>
 <Todo/>
</>
  );
}

export default App;
