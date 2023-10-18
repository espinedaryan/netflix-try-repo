import { useState } from 'react';
import '../styles/Hero.css';
import Categories from './Categories';

function Hero() {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <div className="section">
            <div className="video-container">
                <video autoPlay loop muted={isMuted} >
                    <source src="videos/avengers IW trailer.mp4" type="video/mp4" />
                </video>
                <div className="content">
                    <div>Avengers: Infinity War</div>
                    <p>Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos.</p>
                    <div className="buttons">
                        <button className='play-button'>Play</button>
                        <button className='more-info-button'>More Info</button>
                    </div>
                </div>
                <button className='try' onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? 'Unmute' : 'Mute'}
                </button>
            </div>
            <Categories />
        </div>
    );
}

export default Hero;