import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="left-side">
                    <img src="img/netflix-logo.png" alt="Netflix Logo" />
                    <div className="nav-buttons">
                        <ul>
                            <li><a href="#my-list" className="nav">My List</a></li>
                            <li><a href="#movies" className="nav">Movies</a></li>
                            <li><a href="#tv-shows" className="nav">Tv Shows</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right-side">
                    <img src="img/avatar.png" alt="avatar dp" />
                </div>
            </div>
        </>
    );
}

export default Navbar;