import React from 'react';
import { Navbar } from '../../components/Navbar';

import '../ProductSelect/styles.scss';
import img from '../../assets/img/cyberpunk-capa.png';

export function ProductSelect() {
    return (
        <div className='product-container'>
            <Navbar color='#000'/>
            <div className='product-card'>
                <div className='product-item'>
                    <div className='product-images'>
                        <div className='product-image-sets'>
                        <img src={img} width={150} alt=""/>
                        <img src={img} width={150} alt=""/>
                        <img src={img} width={150} alt=""/>
                        <img src={img} width={150} alt=""/>
                        </div>
                        
                        <div className='product-image-set'>
                            <img src={img} width={150} alt=""/>
                        </div>
                    </div>
                    <div className='product-ilustration'>

                    </div>
                </div>
                <div className='product-price-options'>

                </div>
            </div>

        </div>
    )
}