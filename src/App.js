// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";

// let name="Vedant1230"
function App() {
  // Dark Mode Functions
  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light", " Mode is enabled");
    } else if (mode === "light") {
      setMode("dark");
      showAlert("Dark", " Mode is enabled");

      document.body.style.backgroundColor = "#310833";
    }
  };

  // Alert Functions.

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        togglemode={togglemode}
      />

      {/* <Routes>
        <Route
          path="/"
          element={ */}
            <div className="container my-3">
              <Textform
                showAlert={showAlert}
                heading="Enter Your Text here"
                mode={mode}
                togglemode={togglemode}
              ></Textform>
            </div>
          {/* }
        /> */}

        {/* <Route
          path="/about"
          element={<About mode={mode} togglemode={togglemode}/>}
        />
      </Routes> */}

      <Alert alert={alert} />
    {/* </Router> */}
    </>
  );
}

export default App;
