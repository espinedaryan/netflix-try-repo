import Movies from './Movies';

function Category({ title, movies, isPending }) {
    return (
        <div className="category">
            <h2>{title}</h2>
            <div className="movies-tab">
                {isPending && (
                    <div className="loading-movies">
                        Loading...
                    </div>
                )}
                {movies && movies.map((movie) => {
                        return <Movies movies={movie} title="Popular Movies"/>
                    })}
            </div>
        </div>
    );
}

export default Category;