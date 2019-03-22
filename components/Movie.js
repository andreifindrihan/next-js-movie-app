import React from 'react';
import '../sass/styles.scss';

const Movie = props => {
    const { movieInfo } = props;
    return (
        <div key={movieInfo.id} className="card mb-3 text-center">
            <h3 className="card-header">{movieInfo.title.length > 18 ? movieInfo.title.substring(0, 18) + '...' : movieInfo.title}</h3>
            <div className="card-body">
                <h6 className="card-subtitle text-muted">{movieInfo.overview.length > 300 ? movieInfo.overview.substring(0, 300) + '...' : movieInfo.overview}</h6>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`} alt="Card image" />
        </div>
    )
}

export default Movie;