// this is the "Evolution History" heading page

import scale from '../assets/sharkscale.jpg';
import tooth from '../assets/tooth.jpg';
import devShark from '../assets/problem.jpg';
import devShark2 from '../assets/problem2.jpg';
import carbon from '../assets/carbon.jpg';
import ortha from '../assets/ortha.jpg';
import ortha2 from '../assets/ortha2.jpg';

export default function History() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>450 Million Years Evolution History</h2>

      <h4>First Appearance</h4>
      <p>One of the earliest fossil evidence is a few scales from the Late Ordovician Period 450 million years ago.
        There is an argument suggesting that sharks descended from a small leaf-shaped fish that had no eyes, fins or bones. Eventually
        this fish evolved into the two main groups of fish seen today. One of these groups is called the <b style={{ color: '#EDB32B' }}>Chondrichhthyes</b>,
        and they are the cartilaginous fish such as the sharks, rays, and chimaera.
      </p>
      <img href="" alt="A" src={scale}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>Fossilized Devonian Sharks</h4>
      <p>This fossil was found in Canada in 2003, and is dated to be around 400 Million years old. It belongs to the
        shark called <b style={{ color: '#EDB32B' }}>Doliodus Problematicus</b>. The second image shows a different shark
        called the <b style={{ color: '#EDB32B' }}>Cladoselache</b>, and it was found near Lake Erie in Ohio.
      </p>
      <img href="" alt="A" src={devShark}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />
      <br></br>
      <img href="" alt="A" src={devShark2}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>Oldest Shark tooth</h4>
      <p>This fossil comes from 364 million years ago during the Devonian (the age of the fishes), and it belongs to the the fish called
        <b style={{ color: '#EDB32B' }} > Agelodus Pectinatus</b>. This is from the Red Hill in Pennsylvania.
      </p>
      <img href="" alt="A" src={tooth}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>The Golden Age of Sharks was during the Carboniferous Period (359 mya)</h4>
      <p>
        There was a extinction event that allowed sharks to become the dominant ocean predator. The old armored fish predator, placoderms,
        became extinct. This allowed sharks to evolving into various shapes and sizes. Sharks began spreading out to freshwater while others
        stayed in salt water. Teeth variations started to take place based on shark's diets. The shark with its mouth open is the
        <b style={{ color: '#EDB32B' }} > Edestus heinrichi</b>. The shark on the bottom is the <b style={{ color: '#EDB32B' }} >Stethacanthus altonensis</b>.
        The shark in the background is the <b style={{ color: '#EDB32B' }} >Glikmanius occidentalis</b>.
      </p>
      <img href="" alt="A" src={carbon}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>Shark Mass Extinction during Permian Period (252 mya)</h4>
      <p>"The Big One" extinction event killed 96% of all marine life. Some specialized sharks became extinct like the spiny sharks.
        One of the sharks during this time was called the <b style={{ color: '#EDB32B' }}>Orthachanthus</b>. This fossil of it was found in
        Germany. This shark is 8 feet long.
      </p>
      <img href="" alt="A" src={ortha}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />
      <br></br>
      <img href="" alt="A" src={ortha2}
        style={{
          position: 'relative',
          zIndex: '2',
          display: 'block',
          margin: 'auto',
        }}
      />

      <h4>Mesozoic Shark Recovery (252 mya)</h4>
      <p>(under construction)</p>
      <br></br>

    </div>

  )
}
