import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}

export default App;
