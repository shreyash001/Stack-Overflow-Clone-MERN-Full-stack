import "./App.css";
// import {HelloWorld ,ByeWorld} from './components/HelloWorld'
import { HelloWorld, ByeWorld } from "./components/HelloWorld";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Contact from "./components/contact";

function App() {
  // var counter = 0;
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    // console.log(counter+1);
  };

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
  }, [counter]);

  console.log(counter);

  return (
    <div className="App">
      <Router>
        <nav className="text">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route 
            exact path="/"
            render={() => (
              <>
                <h1>Hello World!</h1>
                <p>This is Home</p>
                <button onClick={increment}>Click ME!!</button>
                <h1>{counter}</h1>
              </>
            )}
          ></Route>

          <Route path="/contact" element={<Contact/>}></Route>
          <Route
            path="/about"
            render={() => (
              <>
                <h1>Hello World!</h1>
              </>
            )}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
