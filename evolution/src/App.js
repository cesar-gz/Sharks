import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateShark from './components/CreateShark';
import ListSharks from './components/ListShark';
import EditShark from './components/EditShark';
import History from './components/EvoHistory';
import Cite from './components/Resources';
import greatwhiteshark from './assets/greatwhiteshark.jpg';

function App() {
  return (
    <div className="App">
      <h1>The Evolution of Sharks</h1>

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
              <Link to="user/:id/edit">Home</Link>
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

        <img width="1000px" height="650px" align="center" href="" alt="The Great White Shark" src={greatwhiteshark} />


    </div>
  );
}

export default App;
