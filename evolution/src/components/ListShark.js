/*
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
*/
import typeA from '../assets/types1.jpg';
import typeB from '../assets/types2.jpg';
import typeC from '../assets/types3.jpg';
import typeD from '../assets/types4.jpg';
import typeE from '../assets/types5.jpg';
import typeF from '../assets/types6.jpg';
import typeG from '../assets/types7.jpg';
import typeH from '../assets/types8.jpg';
import typeI from '../assets/types9.jpg';


// this is the "Types of Sharks" heading page
export default function ListSharks() {

/*

  const [users, setUsers] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/api/users/').then(function (response) {
        console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/api/user/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  return (
    <div>
      <h2>Types of Sharks</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) =>
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )

*/
  return (
    <div>
      <h2>Types of Sharks</h2>

      <p>
        Every shark belongs to a scientific class <b>Chondrichthyes</b> which classifies sharks as cartilaginous fish. These types of fishes have internal skeletons
        made of flexible cartilage rather than hard bones like us. Within the Chondrichthyes, there is a group called the <b>Elasmobranchii</b>.
        Within the Elasmobranchii there are eight orders of sharks. Each order divides the sharks based on the shark's behavior, biology, and physical traits of
        sharks in that order.
      </p>

      <h4>Carcharhiniformes Order</h4>
      <p>
        The largest order of sharks, also known as the "ground sharks". The term ground sharks means that these sharks can be found in warm shallow water along the
        coast. Physical traits include: five gill slits, two spineless dorsal fines, an anal fin, moveable eyelids, and a wide mouth filled with sharp teeth located
        behind the eyes.
      </p>
      <img href="" alt="A" src={typeA}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
      <br></br>
      <img href="" alt="A" src={typeB}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
      <br></br>

      <h4>Heterodontiformes Order</h4>
      <p>Only nine of these species are known. Each have five gill slits, a dorsal fin with a strong spine. They have a sharp and flat rounded teeth.</p>
      <img href="" alt="A" src={typeC}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Hexanchiformes Order</h4>
      <p>These are the most ancient sharks still alive. Traits include: six or seven gill slits, thorny teeth, one dorsal fin and one anal fin. These sharks
        live in deep cold water. </p>
      <img href="" alt="A" src={typeD}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Lamniformes Order</h4>
      <p>These sharks have higher body temperatures that the water they live in. Physical traits: five gill slits, large mouths with rows of sharp teeth,
        two dorsal fins and one anal fin.
      </p>
      <img href="" alt="A" src={typeE}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Orectolobiformes Order</h4>
      <p>These sharks have the most variety and diversity. Physical traits: five gill slits, spiracles (external respiratory opening, like nose holes) around their eyes,
        two spineless dorsal fins and one anal fin.</p>
      <img href="" alt="A" src={typeF}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Pristophoriformes Order</h4>
      <p>These sharks are called sawsharks because of their snout appearance. Physical traits: five or six gill slits, wide pectoral fins, transverse teeth,
        and two dorsal fins.
      </p>
      <img href="" alt="A" src={typeG}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Squaliformes Order</h4>
      <p>This order boasts 126 different types of species and these sharks can be found in almost every marine habitat. Physical traits include: long snouts with
        short mouths, five gill slits, and two dorsal fins. Some of these sharks are glow in the dark.
      </p>
      <img href="" alt="A" src={typeH}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />

      <h4>Squatiformes Order</h4>
      <p>These sharks have flat bodies. Physical Traits include: mouths with dermal flaps in front of a short snout, nasal barbels, eyes and spiracles (nose holes)
        on top of their head.
      </p>
      <img href="" alt="A" src={typeI}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto'
        }}
      />
      <br></br>
      <br></br>

    </div>

  )
}
