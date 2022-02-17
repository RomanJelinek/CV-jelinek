
import Game from "./components/Game"
import Homepage from "./homepage/Homepage"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

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
