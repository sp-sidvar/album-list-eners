import '../classes/album-style.css';

interface AlbumProps {
    data: {
        id: string;
        cover: string;
        name: string;
        artist: string;
        genre: string;
        year: string;
        redirection: string;
    };
}

export function Album({ data }: AlbumProps) {
    return (
        <article className="albumArticle">
            <a
                className="albumLink"
                href={data.redirection}
                target="_blank"
                rel="noopener noreferrer"
            >
                <section className="albumCover">
                    <img
                        className="albumImage"
                        src={data.cover}
                        alt={data.name}
                    />
                </section>

                <section className="albumInfo">
                    <h2 className="albumTitle">{data.name}</h2>
                    <div className="albumData">
                        <span className="albumArtist">
                            Artista: {data.artist}
                        </span>
                        <span className="albumGenre">Genero: {data.genre}</span>
                        <span className="albumYear">Año: {data.year}</span>
                    </div>
                </section>
            </a>
        </article>
    );
}
