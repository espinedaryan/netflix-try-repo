import BlogList from './BlogList';
import './index.css';
import useFetch from './useFetch';

function Home() {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs/');

    return (
        <div className="home">
            {error && <div className='error-message'>{error}</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;