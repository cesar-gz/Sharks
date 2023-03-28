/*
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
*/

import sideProfile from '../assets/anatomy.jpg';
import inside from '../assets/anatomy2.jpg';
import gory1 from '../assets/anatomy3.jpg';
import gory2 from '../assets/anatomy4.jpg';
import gory3 from '../assets/anatomy5.jpg';

// this is the page for the "Anatomy of a Shark"
export default function CreateShark() {
/*
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost/api/user/save', inputs).then(function (response) {
      console.log(response.data);
      navigate('/');

    });

  }

  return (
    <div>
      <h2>Anatomy of Sharks</h2>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChange} />
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
      <h2>Anatomy of Sharks</h2>

      <h4>External Anatomy</h4>
      <p>
        blank for now
      </p>
      <img href="" alt="A" src={sideProfile}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '100%',
          height: '100%'
        }}
      />

      <h4>Internal Anatomy</h4>
      <p>
        blank for now
      </p>
      <img href="" alt="A" src={inside}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
          width: '100%',
          height: '100%'
        }}
      />

      <h4>Gory Photo Header 1</h4>
      <p>
        blank for now
      </p>
      <img href="" alt="A" src={gory1}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>Gory Photo Header 2</h4>
      <p>
        blank for now
      </p>
      <img href="" alt="A" src={gory2}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Gory Photo Header 3</h4>
      <p>
        blank for now
      </p>
      <img href="" alt="A" src={gory3}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
    </div>
  )
}
