import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); //Whether Dark Mode is enabled Or Not
  const [alert, setAlert] = useState(null)//Whether DArk is mode is enabled or noit???

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text_Utils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/gh-pages-url">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces...." mode={mode} />
            </Route>
            <Route exact path="/gh-pages-url/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;

