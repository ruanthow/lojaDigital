import React from 'react';
import { Navbar } from '../../components/Navbar';

import img from '../../assets/img/gameNow.png';
import imglogo from '../../assets/img/nameNow.png'

import '../Introduction/styles.scss'

export function Introduction() {

    const y = window.screen.height
    
    const x = window.screen.width
    
    console.log(x);

    return (
        <div className="container-Introduction">
            <Navbar color={'rgba(0, 0, 0, 0.452)'}/>
            <video width={x} height={y} autoPlay muted loop>
                <source src="/trailer.mp4" type="video/mp4"/>
            </video>
            <main>
                <div className="img-Highlights">
                    <img src={img} alt="Imagem em destaque do jogo Darksouls3" />
                </div>
                <div className="content">
                    <div className="content-items">
                        <button className="btn">Buy Now</button>
                        <button className="btn-secondary">Watch Trailer</button>
                        <img className="logoGame" src={imglogo} alt="logo do jogo Darksouls3" />
                        <div className="plataforms">
                            <img src="/steam.png" alt="logomarca Steam"/>
                            <img src="/ps.png" alt="logomarca Playstation"/>
                            <img src="/xbox.png" alt="logomarca Xbox"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}