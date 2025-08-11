import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          &lt;/Routes&gt;
        &lt;/Layout&gt;
      &lt;/BrowserRouter&gt;
    &lt;/div&gt;
  );
}

export default App;