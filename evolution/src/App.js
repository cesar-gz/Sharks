import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateShark from './components/CreateShark';
import ListSharks from './components/ListShark';
import EditShark from './components/EditShark';
import History from './components/EvoHistory';
import Cite from './components/Resources';

function App() {
  return (
    <div className="App">
      <h2>The Evolution of Sharks</h2>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Types of Sharks</Link>
            </li>
            <li>
              <Link to="user/create">Anatomy of Sharks</Link>
            </li>
            <li>
              <Link to="user/:id/edit">Edit Sharks</Link>
            </li>
            <li>
              <Link to="shark/history">Evolution History</Link>
            </li>
            <li>
              <Link to="shark/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ListSharks />} />
          <Route path="user/create" element={<CreateShark />} />
          <Route path="user/:id/edit" element={<EditShark />} />
          <Route path="shark/history" element={<History />} />
          <Route path="shark/resources" element={<Cite />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
