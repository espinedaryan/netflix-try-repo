import '../styles/Movies.css';

function Movies({ movies }) {
    const { image, title, match, forAge, length, genre, id } = movies;

    return (
        <>
            <div className="movie">
                <img src={image} alt="" className="thumbnail" />

                <div className="movie-details">
                    <div className="thumbnail-container">
                        <img src={image} alt="" />
                        <h3 className="title">{title}</h3>
                        <button>
                            <img src="icons/volume.png" alt="" />
                        </button>
                    </div>
                    <div className="movie-details2">
                        <div className="buttons">
                            <div className="left-buttons">
                                <button>
                                    <img src="icons/play.png" alt="" />
                                </button>
                                <button>
                                    +
                                </button>
                                <button>
                                    <img src="icons/like.png" alt="" className="like-icon" />
                                </button>
                            </div>
                            <div className="right-buttons">
                                <button>
                                    <img src="icons/see-more.png" alt="" className="see-more"/>
                                </button>
                            </div>
                        </div>
                        <div className="second-row">
                            <span className='match'>{match}</span>
                            <span className='for-age'>{forAge}</span>
                            <span className='length'>{length}</span>
                            <span className='hd'>HD</span>
                        </div>
                        <div className="genre">
                            <p>{genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;