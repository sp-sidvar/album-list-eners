import "../classes/filter-style.css";

export function Filter(){
    return (
        <nav id="navbar">
            <form id="filter">
                <input type="text" placeholder="Artista" />
                <select name="genre" id="genre" defaultValue=''></select>
                <select name="anio" id="anio" defaultValue=''></select>
                <button type="submit">Filtrar</button>
            </form>
        </nav>
    )
}