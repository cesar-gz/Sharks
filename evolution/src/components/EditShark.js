/*
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
*/

import shark4 from '../assets/shark4.jpg';
import leopard from '../assets/leopard.jpg';
import lemon from '../assets/lemon.jpg';
import hammer from '../assets/hammer.jpg';
import goblin from '../assets/goblin.jpg';
import mouth from '../assets/megamouth.jpg';
import whale from '../assets/whale.jpg';
import saw from '../assets/sawfish..jpg';

// this is the page for the "Edit Shark"
export default function EditShark() {
/*
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api/user/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value }));

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function (response) {
      console.log(response.data);
      navigate('/');

    });

  }

  return (
    <div>
      <h2>Edit Sharks</h2>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>

      </form>


    </div>
  )
*/
  return (
    <div>
      <h2 style={{ textAlign: 'center' }} >Welcome</h2>
      <p>
        Sharks are a diverse group of fish found in oceans around the world, ranging from the small dwarf lanternshark, which is only about 8 inches long, to the massive whale shark, which can reach lengths of up to 40 feet.
        Sharks have a reputation as fearsome predators, but many species are actually quite peaceful and prefer to feed on small fish, crustaceans, and other marine life. Some sharks, such as the whale shark, are even filter feeders that consume plankton.
        Despite their importance to ocean ecosystems, many shark species are facing threats from overfishing, habitat loss, and climate change. Conservation efforts are underway to protect these iconic creatures and ensure their survival for future generations.
      </p>

      <h4 style={{ textAlign: 'center' }}>Great White Shark</h4>
      <img href="" alt="A" src={shark4}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '60%',
          height: '60%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Leopard Shark</h4>
      <img href="" alt="A" src={leopard}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Lemon Shark</h4>
      <img href="" alt="A" src={lemon}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Great Hammerhead Shark</h4>
      <img href="" alt="A" src={hammer}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Goblin Shark</h4>
      <img href="" alt="A" src={goblin}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Megamouth Shark</h4>
      <img href="" alt="A" src={mouth}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Whale Shark</h4>
      <img href="" alt="A" src={whale}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <h4 style={{ textAlign: 'center' }}>Bahamas Sawshark</h4>
      <img href="" alt="A" src={saw}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '40%',
          height: '40%'
        }}
      />

      <br></br>
    </div>

  )
}
