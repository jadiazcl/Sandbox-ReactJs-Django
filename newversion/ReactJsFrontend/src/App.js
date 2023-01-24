import Error404 from "containers/errors/Error404";
import Posts from "containers/pages/Posts";
import Home from "containers/pages/Home";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import DetailPost from "containers/pages/DetailPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Page */}
          <Route path="*" element={<Error404 />} />
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/detailpost/:slug" element={<DetailPost />} />
        </Routes>
      </Router>
    </Provider>
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
