import "../classes/album-style.css";

export function Album({ data }) {
  return (
    <article className="albumArticle">
      <a
        className="albumLink"
        href={data.redirection}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="albumCover">
          <img className="albumImage" src={data.cover} alt={data.name} />
        </div>

        <div className="albumInfo">
          <h2 className="albumTitulo">{data.name}</h2>
          <div className="albumDetallesInferiores">
            <span className="albumArtista">{data.artist}</span>
            <span className="albumGenero">Género: {data.genre}</span>
            <span className="albumAño">Año: {data.year}</span>
          </div>
        </div>
      </a>
    </article>
  );
}
