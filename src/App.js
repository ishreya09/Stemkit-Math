import './App.css';
import Interface from './Components/Interface';
import QuestionForm from './Components/QuestionForm';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Randomize from './Components/Randomize';
import MathDpp from './Components/MathDpp';
import Polynomial from './Components/Polynomial';
import Graph from './Components/Graph';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/question" element={<QuestionForm />} />
          <Route path="/question-set-variable" element={<Interface />} />
          <Route path="/randomizeques" element={<Randomize />} />
          <Route path="/math-integers-dpp" element={<MathDpp />} />
          <Route path="/two-polynomial-operations" element={<Polynomial />} />
          <Route path="image/two-polynomial-graph" element={<Graph />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
