import './App.css';
import Interface from './Components/Interface';
import QuestionForm from './Components/QuestionForm';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Randomize from './Components/Randomize';
import MathDpp from './Components/MathDpp';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/question" element={<QuestionForm />} />
          <Route path="/question-set-variable" element={<Interface />} />
          <Route path="/randomizeques" element={<Randomize />} />
          <Route path="/math-integers-dpp" element={<MathDpp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
