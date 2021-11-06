import "./App.css";
import ActivityForm from "./components/ActivityForm";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import EditActivity from "./components/EditActivity";

function App() {
  return (
    <div className="App">
      {/* <ActivityForm/> */}
      {/* <h1>welcome</h1> */}
      <ToastContainer />

      <Routes>
        <Route exact path="/" component={()=> <Dashboard />} />
        <Route path="/add" component={ActivityForm} />
        <Route path="/edit/:id" component={EditActivity} />
      </Routes>
    </div>
  );
}

export default App;
