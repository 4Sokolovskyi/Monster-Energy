

import { Outlet } from "react-router-dom";
import './app.scss';
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
