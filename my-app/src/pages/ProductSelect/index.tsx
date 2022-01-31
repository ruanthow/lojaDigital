import React from 'react';
import { Navbar } from '../../components/Navbar';

import '../ProductSelect/styles.scss';
import pc1 from '../../assets/img/PC 1.svg';
import pc2 from '../../assets/img/pc2.svg';
import pc3 from '../../assets/img/pc3.svg';
import pc4 from '../../assets/img/pc4.svg';
import pc5 from '../../assets/img/pc5.svg';
import ilustration from "../../assets/img/pcMain.png";
import { Button } from '../../components/Button';

export function ProductSelect() {
    return (
        <div className='product-container'>
            <Navbar color='#000'/>
            <div className='product-card'>
                <div className='product-item'>
                    <div className='product-images'>
                        <div className='product-image-sets'>
                        <img src={pc2} width={165} alt=""/>
                        <img src={pc3} width={165} alt=""/>
                        <img src={pc4} width={165} alt=""/>
                        <img src={pc5} width={165} alt=""/>
                        </div>
                        
                        <div className='product-image-set'>
                            <img src={pc1} width={663} alt=""/>
                        </div>
                    </div>
                    <div className='product-ilustration'>
                        <img src={ilustration} width={828} height={324} alt="" />
                    </div>
                </div>
                <div className='product-price-options'>
                    <div className='product-name'>
                        <p>COMPUTADOR MANCER GAMER ÍSIS, AMD RYZEN 5 2600, GEFORCE GTX 1050 TI 4GB, 8GB DDR4, HD 1TB</p>
                        <div></div>            
                    </div>
                    <div className='product-time'>
                        
                        <div className='product-cronometro'>
                        <strong>Produto Disponível</strong>
                            cronometro
                        </div>
                        <div className='line'></div>
                    </div>
                    <div className='product-area-buy'>
                        <div className='product-area-price'>
                        <p><strong style={{color:'#fd0707'}}>de R$ 5.725,40 por:</strong><strong style={{color:"#09c703"}}> à vista R$4.749,50</strong> no boleto bancário. <strong >via PIX com 12% desconto</strong> ou em até 3x no cartão com 5% de desconto.</p>
                        </div>
                        <div className='product-area-CEP'>
                            <p>Digite seu CEP</p>
                            <Button/>
                        </div>
                        <div>
                            buttons
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}