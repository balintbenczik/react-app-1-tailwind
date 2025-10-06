
function MovieCard({ movie }) {

    function onFavouriteClick() {
        alert("clicked")
    }



    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavouriteClick}>𖹭</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p></p>

        </div>
    </div>
}