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
      <h2 style={{ textAlign: 'center' }}>External Anatomy</h2>

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

      <ul>
        <li>Skin
          <ul>
            <li>
              Sharks are covered in tiny teeth called dermal denticles that point backwards. This reduces drag when swimming
              and increases sharks speed.
            </li>
            <li>Sharks shed these denticles and grow bigger denticles underneath. The sizes of denticles
              range based on species of shark.
            </li>
          </ul>
        </li>

        <li>
          Teeth
          <ul>
            <li>
              Born with strong enamel and have been found in many fossil records. Rows of their teeth are replaced every two weeks
              to keep their primary weapons sharp.
            </li>
            <li>
              Sharks can go through 30,000 teeth in their lifetime. Studying the shape of the teeth informs us of their diet.
            </li>
            <li>
              Flat teeth help sharks eat shellfish. Pointed teeth help grip fish. Sharp serrated teeth are for larger prey like seals.
            </li>
          </ul>
        </li>

        <li>
          Fins
          <ul>
            <li>
              The large dorsal fin and small dorsal fin help sharks balance and maintain stability in water.
            </li>
            <li>
              The pectoral fins are used for steering to help shark lift themselves in water, while the tail propels.
            </li>
            <li>
              Shorter circular tails make sharks fast, while longer thinner tails make sharks slow.
            </li>
            <li>
              Demand for shark fins is contributing to decline of shark species.
            </li>
          </ul>
        </li>

        <li>
          Gills
          <ul>
            <li>
              Most sharks have to continuously move forward to keep "breathing".
            </li>
            <li>Water enters through their mouths and out their gills, this is called ram-ventilation.</li>
            <li>As water passes over gills, oxygen is absorbed into the blood vessels.</li>
            <li>Nurse Sharks and Zebra Sharks don't have to move to breathe. They just end up breathing in a lot more water
              to make up for the lack of movement.
            </li>
          </ul>
        </li>

      </ul>

      <h2 style={{ textAlign: 'center' }}>Internal Anatomy</h2>
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

      <ul>
        <li>Skeleton
          <ul>
            <li>
              made up of cartilage instead of bone, allowing it be lighter and flexible. Increased flexibility allows
              sharks to turn sharply, while being lighter reduces the amount of energy they need to move. The age of shark can be told
              by counting the rings on their backbones.
            </li>
          </ul>
        </li>

        <li>
          Muscles
          <ul>
            <li>
              Red muscle helps the shark break down fat, supply blood to the body, and helps swim for a long amount of time.
            </li>
            <li>White muscle works off of glucose, helps shark perform short fast sprints when in fight or flight.</li>
            <li>Muscle fibers will run from the top of the sharks head to the tip of its tail.</li>
          </ul>
        </li>

        <li>Liver
          <ul>
            <li>
              25% of a sharks body weight is their liver. Most mammal's livers are only 5%.
            </li>
            <li>
              Shark liver oil is high in demand for Cosmetics and contributes to decline of shark species.
            </li>
            <li>
              The shark's rely on their large livers with low density oils to keep them buoyant.
            </li>
          </ul>
        </li>

        <li>Temperature Control
          <ul>
            <li>
              Most are cold blooded, except for the mackerel sharks that can warm their own blood. Warmer blooded sharks are more efficient predators.
            </li>
            <li>
              Warmer blood allows sharks to stay and operate in kill mode a lot longer than cold blooded sharks.
            </li>
            <li>
              The Great White Shark is a warm blooded shark.
            </li>
          </ul>
        </li>
      </ul>

      <h4 style={{textAlign: 'center'}}>Photos</h4>
      <img href="" alt="A" src={gory1}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />
      <br></br>

      <img href="" alt="A" src={gory2}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
      <br></br>

      <img href="" alt="A" src={gory3}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
      <br></br>
    </div>
  )
}
