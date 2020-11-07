import React from 'react';
import './styles/style.css';

import logoImg from './images/logo.jpg';

import ImgHomeUm from './images/imgHome1.jpg';

import ImgHomeDois from './images/imgHome2.jpg';

import ImgHomeTres from './images/imgHome3.jpg';

import ImgHomeQuatro from './images/imgHome4.jpg';

import { Button } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';




function App() {
  return (
    <div className="App">
      <header>
        <div id="meioHeader">
          <h1><img src={logoImg} alt="ASHGA" /></h1>

          <div id="LadoDireito">
            <ul className="associar">
              <li><a href="">Login</a></li>
              <li><a href="">Associar-se</a></li>
            </ul>

            <ul id="Menu">
              <li><a href="">HOME</a></li>
              <li><a href="">SOBRE</a></li>
              <li><a href="">PARCEIROS</a></li>
              <li><a href="">2ª VIA DE BOLETO</a></li>
              <li><a href="">FALE CONOSCO</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div id="Banner">
        <div id="meioBanner">
          <h2>ASSOCIAÇÃO DOS SERVIDORES DO HOSPITAL GUILHERME ÁLVARO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,. <br/><br/><br/> <Button variant="outlined" color="primary" id="botao">Saiba mais</Button></p>




        </div>
      </div>


      <div id="Content">
        <div id="MeioContent">
          <ul>
            <li>
              <a href="">
              <img src={ImgHomeUm} alt="Emitir 2º via de boleto"/>
              <h4>Emitir 2ª via de boleto</h4>
              <p>Until recently, the prevailing view the </p>
              </a>
            </li>

            <li>
              <a href="">
              <img src={ImgHomeDois} alt="Sobre a ASHGA"/>
              <h4>Sobre a ASHGA</h4>
              <p>Until recently, the prevailing view the </p>
              </a>
            </li>

            <li>
              <a href="">
              <img src={ImgHomeTres} alt="Nossos Parceiros"/>
              <h4>Nossos Parceiros</h4>
              <p>Until recently, the prevailing view the </p>
              </a>
            </li>

            <li>
              <a href="">
              <img src={ImgHomeQuatro} alt="Fale Conosco"/>
              <h4>Fale Conosco</h4>
              <p>Until recently, the prevailing view the </p>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <footer>
        <div id="meioFooter">
          <ul>
            <li><a href=""><Icon id="face">facebook</Icon></a></li>
            <li><a href=""><Icon id="insta">InstagramIcon</Icon></a></li>
          </ul>

          <p>ASHGA - Associação dos Servidores do Hospital Guilherme Álvaro 2020 <br/>
Todos os direitos reservados.</p>
        </div>
      </footer>



    </div>
  );
}

export default App;
