import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { GlobalStyle } from "./Style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  );
}

export default App;
