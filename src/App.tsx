import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import Bibliography from './pages/Bibliography';
import Authors from './pages/Authors';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="topics/:id" element={<TopicDetail />} />
            <Route path="bibliography" element={<Bibliography />} />
            <Route path="authors" element={<Authors />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;