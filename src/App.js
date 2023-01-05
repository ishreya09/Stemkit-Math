import './App.css';
import Interface from './Components/Interface';
import QuestionForm from './Components/QuestionForm';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Randomize from './Components/Randomize';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<QuestionForm />} />
          <Route path="/question" element={<Interface />} />
          <Route path="/randomizeques" element={<Randomize />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
