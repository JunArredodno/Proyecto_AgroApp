import './App.css';
import Header from './Header';
import Home from './Home';
import Mi_cuenta from './Mi_cuenta';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <Header />
    

       

        <Home />
    

     
    </div>
  );
}

export default App;
