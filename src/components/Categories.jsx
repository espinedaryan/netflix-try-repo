import useFetch from '../useFetch';
import Category from './Category';

function Categories() {
    const { data:popularMovies, isPending, error } = useFetch('http://localhost:8000/popular-movies/');
    const { data:topRatedMovies } = useFetch('http://localhost:8000/top-rated-movies/');
    const { data:nowPlayingMovies } = useFetch('http://localhost:8000/now-playing-movies/');
    const { data:upcomingMovies } = useFetch('http://localhost:8000/upcoming-movies/');

    return (
        <>
        
            <Category title={"Popular Movies"} movies={popularMovies} isPending={isPending}/>

            <Category title={"Top Rated Movies"} movies={topRatedMovies} isPending={isPending}/>
            
            <Category title={"Now Playing Movies"} movies={nowPlayingMovies} isPending={isPending}/>
            
            <Category title={"Upcoming Movies"} movies={upcomingMovies} isPending={isPending}/>
            
            {/* <Category title={"Action Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Adventure Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Animation Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Comedy Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Crime Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Documentary Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Drama Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Family Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Fantasy Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"History Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Horror Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Music Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Mystery Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Romance Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Science Fiction Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"TV Movie Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Thriller Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"War Movies"} movies={popularMovies} isPending={isPending}/>
            
            <Category title={"Western Movies"} movies={popularMovies} isPending={isPending}/> */}
        </>
    );
}

export default Categories;