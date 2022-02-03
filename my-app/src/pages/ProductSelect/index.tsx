import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Input } from '../../components/Input';

import '../ProductSelect/styles.scss';

import { HiShoppingCart } from 'react-icons/hi';
import {VscGear} from 'react-icons/vsc';

import pc1 from '../../assets/img/PC 1.svg';
import pc2 from '../../assets/img/pc2.svg';
import pc3 from '../../assets/img/pc3.svg';
import pc4 from '../../assets/img/pc4.svg';
import pc5 from '../../assets/img/pc5.svg';
import ilustration from "../../assets/img/pcMain.png";
import { useHistory } from 'react-router-dom';

export function ProductSelect() {

    const history = useHistory()


    return (
        <div className='product-container'>
            <Navbar color='#000' />
            <div className='product-card'>
                <div className='product-item'>
                    <div className='product-images'>
                        <div className='product-image-sets'>
                            <img src={pc2} width={165} alt="" />
                            <img src={pc3} width={165} alt="" />
                            <img src={pc4} width={165} alt="" />
                            <img src={pc5} width={165} alt="" />
                        </div>

                        <div className='product-image-set'>
                            <img src={pc1} width={663} alt="" />
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
                            <p><strong style={{ color: '#fd0707' }}>de R$ 5.725,40 por:</strong><strong style={{ color: "#09c703" }}> à vista R$4.749,50</strong> no boleto bancário. <strong >via PIX com 12% desconto</strong> ou em até 3x no cartão com 5% de desconto.</p>

                        </div>
                        <div className='product-area-CEP'>
                            <p>Digite seu CEP</p>
                            <Input />

                        </div>
                    </div>
                    <div className='product-buttons'>
                        <button onClick={()=>{
                            history.push("/paymentPage")
                        }}
                        ><HiShoppingCart size={30} color="white" />Comprar</button>
                        <button>Carrinho</button>
                    </div>
                    <div className='product-description'>
                        <strong>Descrição do produto <VscGear size={25} style={{paddingLeft:"5"}}/></strong>
                        <div className='product-infos'>
                            <div className='product-title'>
                                <strong>Processador</strong>
                                <p>- AMD Ryzen 5 2600 Hexa-Core 3.4GHz (3.9GHz Turbo) 19MB Cache AM4, YD2600BBM6IAF</p>
                            </div>
                            <div className='product-title'>
                                <strong>Placa mãe</strong>
                                <p>- A320M DDR4 Socket AM4 Chipset AMD A320</p>
                            </div>
                            <div className='product-title'>
                                <strong>Memória</strong>
                                <p>- 8GB (1x8) DDR4 2666MHz</p>
                            </div>
                            <div className='product-title'>
                                <strong>Placa de vídeo</strong>
                                <p>- Asus GeForce GTX 1050 Ti OC 4GB GDDR5 128-bit, 90YV0A74-M0BA00</p>
                            </div>
                            <div>
                                <strong>Armazenamento</strong>
                                <p>- HD WD Blue 1TB 3.5" Sata III 6GB/s, WD10EZEX</p>
                            </div>
                            <div className='product-title'>
                                <strong>Fonte</strong>
                                <p>- Fonte Cougar 500W Bronze 80 Plus, PG-5001-BR-OEM</p>
                            </div>
                            <div className='product-title'>
                                <strong>Gabinete</strong>
                                <p>- Pichau Komor LED RGB Lateral em Vidro Temp, PGK-01-RGB</p>
                            </div>
                            <div className='product-title'>
                                <strong>Cabos</strong>
                                <p>- Cabo De Alimentação + Cabo HDMI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}