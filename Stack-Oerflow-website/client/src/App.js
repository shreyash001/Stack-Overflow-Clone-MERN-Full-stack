import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question.js";
import { fetchAllUsers } from "./actions/users.js";

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
