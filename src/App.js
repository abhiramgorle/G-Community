import './App.css';
import { BrowserRouter} from "react-router-dom";
import Pages from './Components/Pages/Pages'
import AppContext  from "./Components/Appcontext/AppContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AppContext>
            <Pages></Pages>
          </AppContext>
        </BrowserRouter>
    </div>
  );
}

export default App;
