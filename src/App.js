
import Game from "./components/Game"
import Homepage from "./homepage/Homepage"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import smartlookClient from 'smartlook-client'
import { useState, useEffect } from "react"
import useTest  from "./useTest"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/timeline/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
