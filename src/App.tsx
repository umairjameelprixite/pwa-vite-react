import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Notes from "./components/Notes";
import NoteDetail from "./components/NoteDetail";
import QueryParamPage from "./components/QueryParamPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/query" element={<QueryParamPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
