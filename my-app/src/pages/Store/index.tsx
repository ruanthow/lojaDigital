import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import '../Store/styles.scss';

import imgItem from '../../assets/img/cyberpunk-capa.png';
import { useHistory } from "react-router-dom";

export function Store(){

    const history = useHistory();

    return(
        <div className="store-container">
            <Navbar color="#000"/>
            <section className="store-card">
                <div className="store-menu">
                    <div className="store-list">
                        <ul>
                            <strong>Categoria</strong>
                            <a href="." > <li>Jogos para console</li> </a>
                            <a href="." > <li>Acessórios Gamer</li> </a>
                            <a href="." > <li>Playstation 4</li> </a>
                            <a href="." > <li>Xbox One</li> </a>
                            <a href="." > <li>Nintendo DS</li> </a>
                            <a href="." > <li>Jogos para PC</li> </a>
                            <a href="." > <li>Playstation 5</li> </a>
                            <a href="." > <li>Xbox Series</li> </a>
                            <a href="." > <li>Nintendo Swift</li> </a>
                        </ul>
                        <div className="store-line"></div>
                    </div>

                    <div className="filter-list">
                        <div className="filter-options">
                            <strong>Preço</strong>
                            <input type="text" placeholder="Mínimo" pattern="[0-9]*" maxLength={120}/>
                            <input type="text" placeholder="Máximo" pattern="[0-9]*" maxLength={120}/>
                            <button>Pesquisar</button>
                        </div>
                        <div className="store-line2"></div>
                    </div>
                    
                </div>
                <div className="store-items">
                    <div className="store-item">
                        <div>
                        <img src={imgItem} alt="" onClick={()=>{
                            history.push('/productSelect')
                        }}/>
                         <div className="store-item-infos">
                            <p className="item-name">Cyberpunk 2077</p>
                            <p className="item-price">R$ 59,90</p>
                            <p className="item-options">2x de R$ 29,95 sem juros no cartão de crédito</p> 
                        </div>
                        </div>
                        <div className="line"></div>       
                    </div>
                    <div className="store-item">
                        <div>
                        <img src={imgItem} alt="" />
                         <div className="store-item-infos">
                            <p className="item-name">Cyberpunk 2077</p>
                            <p className="item-price">R$ 59,90</p>
                            <p className="item-options">2x de R$ 29,95 sem juros no cartão de crédito</p> 
                        </div>
                        </div>
                        <div className="line"></div>       
                    </div>
                    <div className="store-item">
                        <div>
                        <img src={imgItem} alt="" />
                         <div className="store-item-infos">
                            <p className="item-name">Cyberpunk 2077</p>
                            <p className="item-price">R$ 59,90</p>
                            <p className="item-options">2x de R$ 29,95 sem juros no cartão de crédito</p> 
                        </div>
                        </div>
                        <div className="line"></div>       
                    </div>
                    <div className="store-item">
                        <div>
                        <img src={imgItem} alt="" />
                         <div className="store-item-infos">
                            <p className="item-name">Cyberpunk 2077</p>
                            <p className="item-price">R$ 59,90</p>
                            <p className="item-options">2x de R$ 29,95 sem juros no cartão de crédito</p> 
                        </div>
                        </div>
                        <div className="line"></div>       
                    </div>
                             
                </div>
            </section>
            <Footer/>
        </div>
    )
}