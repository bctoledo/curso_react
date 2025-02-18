import "./App.css"

import { BrowserRouter as Router } from "react-router-dom";
import { Content } from "./components/Content";
import { Menu } from "./components/Menu";


export function App(){
  return(
    <Router>
      <div className="app-main">
        <Menu />
        <Content />
      </div>
    </Router>
  )
}