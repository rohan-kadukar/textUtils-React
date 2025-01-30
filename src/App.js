import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import TextFrom from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';





function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" about="About Us"/> */}
    {/* <Navbar /> */}
    <Router basename="/textUtils" future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route
              exact path="/"
              element={<TextFrom heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />}
            />
            {/* <TextFrom heading="Enter text to analyze below" mode={mode} showAlert={showAlert} /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
          </div>
      </Router>

    </>
  );
}

export default App;