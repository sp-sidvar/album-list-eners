import { Album } from "./Album.jsx";
import data from "../data/db.json";
import "../classes/gallery-style.css";
import { useState } from 'react';

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export function Gallery() {
  const [randomizedData] = useState(() => shuffleArray(data));

  return (
    <section className="content">
      {randomizedData.map((album) => (
        <Album key={album.id} data={album} />
      ))}
    </section>
  );
}




// export function Gallery() {
//   return (
//     <section className="content">
//       {data.map((album) => (
//         <Album key={album.id} data={album} />
//       ))}
//     </section>
//   );
// }
