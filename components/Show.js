import React from 'react';

const Show = props => {
    const { showInfo } = props;
    return (
        <div key={showInfo.id} className="card mb-3 text-center">
            <h3 className="card-header">{showInfo.original_name.length > 18 ? showInfo.original_name.substring(0, 18) + '...' : showInfo.original_name}</h3>
            <div className="card-body">
                <h6 className="card-subtitle text-muted">{showInfo.overview.length > 300 ? showInfo.overview.substring(0, 300) + '...' : showInfo.overview}</h6>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${showInfo.backdrop_path}`} alt="Card image" />
        </div>
    )
}

export default Show;