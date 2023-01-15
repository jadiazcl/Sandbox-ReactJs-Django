import logo from "./logo.svg";
import "./App.css";
import NewComponent from "./components/NewComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPost from "./pages/DetailPost";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewComponent />
        <Router>
          <Routes>
            <Route path="search/:id_post" element={<DetailPost />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
