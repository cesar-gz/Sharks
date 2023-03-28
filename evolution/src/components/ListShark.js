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
        coast. Physical traits include: five gill slits, two spineless dorsal fines, an anal fin, moveable third eyelids, and a wide mouth filled with sharp teeth located
        behind the eyes. There are about 200 different types of these species. They are common in open tropical waters.
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
      <p>Only nine of these species are known. Each have five gill slits, a dorsal fin with a strong spine. They have a sharp and flat rounded teeth.
        The horn shark, also known as the bullhead shark, is the only living shark family in this order. These sharks can grow between 22 to 66 inches long.
        They like to live in moderately deep continental waters of at least 900 feet in depth.
      </p>
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
        live in deep cold water. These sharks hatch young from eggs inside their body. Frilled sharks can grow up to 78 inches and have been found to
        reproduce in deep water of Japan. The six and seven gill sharks can grow between 4.5 feet up to 16.5 feet.</p>
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
        two dorsal fins and one anal fin. These sharks are also called Mackerel sharks. Embryos of these sharks dine on their younger siblings and
        fertilized eggs in the womb. The Basking shark can grow between 40 and 50 feet.
        The Great White and Thresher sharks can grow up to 20 feet. Megamouth sharks are about 15 feet long. Goblin sharks can grow up to 12 feet. Crocodile
        Sharks have a maximum length of 3.5 feet.
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
        two spineless dorsal fins and one anal fin. These sharks are also called Carpetsharks. Wobbegongs like to eat octopuses and can be found in Australia. Nurse
        sharks range from 30 inches to 9 feet. Nurse sharks like to live near sandy beaches of depths of 230 feet, and like to inhale prey such as squids and crabs.
        Zebra Sharks range from 10 to 12 feet and like to live in narrow crevices of coral reefs. Whale Sharks are the worlds largest fish that can grow up to 45
        feet long. Whale sharks like living near the surface in warm waters, and perform a "tail stand" that allows them to suck in krill and small fishes like a
        vacuum.</p>
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
        and two dorsal fins. These sharks use their snout to disable prey, can grow up to 6 feet, and hatch their young from eggs within their body.
        Older Bahamas sawsharks live deep in the water while the young ones like to stay near the surface. They like to crustaceans and squid.
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
        short mouths, five gill slits, and two dorsal fins. Some of these sharks are glow in the dark. Bramble Sharks range from 10 feet to 13 feet, live in waters
        as shallow as 36 feet and as deep as 3,000 feet. The Dogfish shark have been found as deep as 20,000 feet, like eating other sharks, and are the
        smallest of sharks ranging from 12 to 36 inches. The Pacific Sleeper shark can reach up 23 feet in length. The Kitefin shark is the largest shark that can
        glow in the dark at a length of six feet.
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
        on top of their head. The largest Angelshark found was 8 feet. The Angelshark lives in depths of 4,500 feet, and have a small mouth they use for impaling.
        During the day these sharks bury themselves in mud and sand to capture seasnails and small fishes.
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
