// App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import useAuthState from "./components/AuthState";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useAuthState();
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home setAuth={setIsAuthenticated}/>}
        />
        <Route
          path="/register"
          element={ <Register setAuth={setIsAuthenticated} />}
        />
        <Route
          path="/home"
          element={ <Home setAuth={setIsAuthenticated}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
