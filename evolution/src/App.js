import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateShark from './components/CreateShark';
import ListSharks from './components/ListShark';
import EditShark from './components/EditShark';
import History from './components/EvoHistory';
import Cite from './components/Resources';
import shark from './assets/shark1.png';
import greatWhite from './assets/shark2.png';
import megalodon from './assets/shark3.png';


function App() {
  return (
    <div className="App">
      <h1>The Evolution of Sharks</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="user/:id/edit" >Home</Link>
            </li>
            <li>
              <Link to="/" >Types of Sharks</Link>
            </li>
            <li>
              <Link to="user/create" >Anatomy of Sharks</Link>
            </li>
            <li>
              <Link to="shark/history" >Evolution History</Link>
            </li>
            <li>
              <Link to="shark/resources" >Resources</Link>
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

      <div>
        <img
          href="" alt="Shark" src={shark}
          height="155px" width="300px"
          style={{
            position:'absolute',
            top:'700px',
            float:'left',
            opacity: '0.5',
          }}
          />
      </div>

      <div>
        <img
          href="" alt="greatWhiteShark" src={greatWhite}
          height="625px" width="450px"
          style={{
            position:'absolute',
            top:'1200px',
            right: '80px',
            opacity:'0.3'
          }}
          />
      </div>

      <div>
        <img
          href="" alt="meg" src={megalodon}
          height="675px" width="1000px"
          style={{
            position:'absolute',
            top: '2300px',
            right: '300px',
            opacity:'0.1'
          }}
          />
      </div>

    </div>
  );
}

export default App;
