import { Album } from "./Album.jsx";
import data from "../data/db.json";

export function Gallery() {
  return (
    <>
      {data.map((album) => (
        <Album key={album.id} data={album} />
      ))}
    </>
  );
}
