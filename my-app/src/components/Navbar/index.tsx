import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.scss';

interface NavbarProps{
    color:string
}



export function Navbar({color} : NavbarProps) {

    const [sideMenu, setSideMenu] = useState(Boolean);
    const [menu, setMenu] = useState(true);

    const history = useHistory();

    
    
   

    return (
        <div className="navbar" style={{background:`${color}`}}>
            { sideMenu &&
                <div className="side-menu-container">
                    <div className="side-menu-header">
                        <div className="side-menu-account">
                            <img src="/user.svg" alt=""/>
                            <button className="btn-account">Minha Conta</button>
                            <button 
                            className="btn-close"
                            onClick={()=>{
                                setSideMenu(false);
                                setMenu(true);
                            }}
                            >x
                            </button>
                        </div>
                    </div>
                    <div className="side-menu-line">
                        <span></span>
                    </div>
                     
                    <div className="side-menu-body">
                        <button>Hardware</button>
                        <button>Conloses</button>
                        <button>Games</button>
                        <button>Periféricos</button>
                        <button>Monitores</button>
                        <button>Eletrônicos</button>
                        <button>Kit Upgrade</button>
                    </div>
            </div>
            }
            <nav className="navbar-Menu">
                { menu &&
                    <button 
                    className="navbar-toogle" 
                    onClick={()=>{
                        setSideMenu(true);
                        setMenu(false);
                    }}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>Menu</p>
                </button>
                }
                <button 
                className="navbar-logo"
                onClick={()=>{
                    history.push('/home')
                }}
                >
                    <img src="/logo.png" alt="Logo da Empresa" />
                    <p>GentlemanGamer</p>
                </button>
                <div className="navbar-search">
                    <form>
                        <input 
                        type="text"
                        placeholder="Pesquise aqui o produto que deseja" 
                        />
                        <img src="/search.png" alt="Pesquisar" />
                    </form>
                </div>
                <button className="navbar-account">
                    <img src="/user.svg" alt="Minha conta"/>
                    <p>Minha Conta</p>
                </button>
                <button className="navbar-cart">
                    <img src="/cart.png" alt="Carrinho de compras" />
                </button>

            </nav>
        </div>
    )
}