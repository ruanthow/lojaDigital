import React from 'react'
import { Navbar } from '../../components/Navbar';

import './styles.scss';

import cyberpunkCapa from '../../assets/img/cyberpunk-capa.png';
import consoles from '../../assets/img/consoles.png';

export function Home() {
    return(
        <div className="container-Home">
            <Navbar color={'#020202'}/>
            <section className="home-onFire">
               <div className="home-card">
                   <div className="home-button-buy">
                       <strong>R$ 75,58</strong>
                       <div className="home-subbutton">
                            <p>+</p>
                       </div>
                    </div>      
               </div>
               <div className="home-card-secondary">
                    <div className="home-game">
                        <img src={cyberpunkCapa} alt="" />
                        <strong>CyberPunk 2077</strong>
                    </div>
                    <div className="home-game">
                        <img src={cyberpunkCapa} alt="" />
                        <strong>CyberPunk 2077</strong>
                    </div>
                    <div className="home-game">
                        <img src={cyberpunkCapa} alt="" />
                        <strong>CyberPunk 2077</strong>
                    </div>
                    <div className="home-game">
                        <img src={cyberpunkCapa} alt="" />
                        <strong>CyberPunk 2077</strong>
                    </div>
               </div>
            </section>
            <section className="home-news">
                <div className="home-news-area-1">
                    <img src={consoles} alt="" />
                </div>
                <div className="home-news-area-2">
                    <strong>
                        Next Generation
                    </strong>
                    <p>
                    Conheça a geração mais poderosa dos consoles da atualidade <a href="">Playstation 5</a> e <a href="">Xbox Series</a> . Tenha as melhores experiências a 60 FPS em grandes franquias. Red Dead Redemption 2, Assassin's Creed Valhalla, CyberPunk 2077 e muito mais.
                    </p>
                </div>
            </section>
        </div>
    )
}