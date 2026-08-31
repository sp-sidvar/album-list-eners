import { Album } from "./Album.jsx";
import data from "../data/db.json";
import "../classes/gallery-style.css";

export function Gallery() {
  return (
    <section className="content">
      {data.map((album) => (
        <Album key={album.id} data={album} />
      ))}
    </section>
  );
}
