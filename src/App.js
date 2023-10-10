import './App.css';
import { BrowserRouter} from "react-router-dom";
import Pages from './Components/Pages/Pages'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Pages></Pages>
        </BrowserRouter>
    </div>
  );
}

export default App;
