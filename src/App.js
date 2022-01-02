
import Game from "./components/Game"
import Homepage from "./homepage/Homepage"
import Navmenu from "./navbar/Navmenu"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {


  return (
    <Router>
      <Navmenu/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/timeline" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
