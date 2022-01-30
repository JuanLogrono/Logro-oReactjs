import React from 'react';
import logo from '../iconos/imagenes/logo.png';
import './style.css'

const AboutUs = () => {
  return <article className='aboutUs__article--order'>
      <img className='aboutUs__logo--size' src={logo} alt="Logo" />
      <h1 className='aboutUs__title--order'>Acerca de nosotros</h1>
      <p className='aboutUs__paragraph--style'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ab velit cupiditate ipsum natus esse voluptate dignissimos excepturi quam, dolore unde illo, quas error corrupti numquam voluptatem placeat? Quo, eum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea totam qui voluptatum quae debitis quidem exercitationem minima esse recusandae eligendi deserunt, odio optio maiores doloremque ut dolorum accusamus laudantium?</p>
  </article>;
};

export default AboutUs;
