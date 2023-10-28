import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./components/home";
import About from "./components/about";
import Footer from './components/footer'
import Create from "./components/create";
import Edit from "./components/edit";
import RecordList from "./components/recordList"

function App() {
  return (
    <>
    <Router>

      <Navbar />

        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/record" element={<RecordList />} />
        </Routes>

      <Footer />

    </Router>
    </>
  );
}

export default App;
