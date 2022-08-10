import "./App.css";
import Detail from "./pages/Detail";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import List from "./pages/List";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/diary" />}></Route>
        <Route path="/:category" element={<List />} />
        <Route path="/:category/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
