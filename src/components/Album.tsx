import '../classes/album-style.css';

/**
 * Representa la estructura de datos que requiere un álbum.
 * @interface AlbumProps
 */
export interface AlbumProps {
    /** Objeto que contiene toda la información detallada del álbum. */
    data: {
        /** Identificador único del álbum. */
        id: string;
        /** URL de la imagen de portada. */
        cover: string;
        /** Título del álbum. */
        name: string;
        /** Nombre del artista o banda. */
        artist: string;
        /** Género musical del álbum. */
        genre: string;
        /** Año de lanzamiento del álbum. */
        year: string;
        /** URL externa de redirección. */
        redirection: string;
    };
}

/**
 * Componente que renderiza la tarjeta de un álbum musical individual con su información.
 * Todo el contenido está envuelto en un enlace externo seguro.
 *
 * @component
 * @param {AlbumProps} props - Propiedades del componente.
 * @param {AlbumProps['data']} props.data - Información detallada del álbum.
 * @returns {React.JSX.Element} Un elemento de artículo semántico que contiene la tarjeta del álbum.
 *
 */
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
