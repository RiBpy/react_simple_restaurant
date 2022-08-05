import Restaurant from './component/Basics/restaurant'
import { About } from './component/Basics/about'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;