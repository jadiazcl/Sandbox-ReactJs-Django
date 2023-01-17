import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import HeaderCustom from "./components/HeaderCustom";
import FooterCustom from "./components/FooterCustom";
function App() {
  return (
    <>
      <HeaderCustom />
      <MainContent />
      <FooterCustom />
    </>
  );
}
/*return (
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
  );*/
export default App;
