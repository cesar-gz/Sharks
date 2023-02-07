import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateShark from './components/CreateShark';
import ListSharks from './components/ListShark';
import EditShark from './components/EditShark';

function App() {
  return (
    <div className="App">
      <h2>React CRUD operations using PHP API and MySQL</h2>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Sharks</Link>
            </li>
            <li>
              <Link to="user/create">Create Sharks</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ListSharks />} />
          <Route path="user/create" element={<CreateShark />} />
          <Route path="user/:id/edit" element={<EditShark />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
