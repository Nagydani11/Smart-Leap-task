import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import LoginForm from "./component/Login";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const handleLoginSubmit = (username: string, password: string) => 
  console.log('Bejelentkezési adatok:', { username, password });
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<LoginForm onSubmit={handleLoginSubmit}/>} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
