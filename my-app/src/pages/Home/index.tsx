import React from 'react'
import { useHistory } from 'react-router';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import './styles.scss';

import cyberpunkCapa from '../../assets/img/cyberpunk-capa.png';
import consoles from '../../assets/img/consoles.png';
import titles from '../../assets/img/titles.png';



export function Home() {
   const history = useHistory();

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
                    <div className="home-game" onClick={()=>{
                        history.push('/store')
                    }}>
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
                    Conheça a geração mais poderosa dos consoles da atualidade <a href="/">Playstation 5</a> e <a href="/">Xbox Series</a> . Tenha as melhores experiências em grandes franquias. Red Dead Redemption 2, Assassin's Creed Valhalla, CyberPunk 2077 e muito mais.
                    </p>
                </div>
            </section>
            <section className="home-titles">
                <img src={titles} alt="Grandes titulos dos consoles" />
            </section>
            <Footer/>
        </div>
    )
}