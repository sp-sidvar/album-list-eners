import "../classes/album-style.css";
export function Album({ data }) {
  return (
    <>
      <article className="albumArticle">
        <a href={data.redirection} target="_blank" rel=" noopener noreferrer">
          <div className="cover">
            <img src={data.cover}  />
          </div>
          <div className="info">
            <h2 id="titulo">{data.name}</h2>
            <span id="artista">{data.artist}</span>
            <span id="genero">Genero: {data.genre}</span>
            <span id="año">Año: {data.year}</span>
          </div>
        </a>
      </article>
    </>
  );
}
