"use client"; // 🔑 Needed because react-slick runs only in the browser

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './s5-diamond.css'; // Assuming you have a CSS file for styling

// Import images
import pear from '../../../public/img/shape-pear.svg';
import heart from '../../../public/img/shape-heart.svg';
import marquise from '../../../public/img/shape-marquise.svg';
import oval from '../../../public/img/shape-oval.svg';
import princess from '../../../public/img/shape-princess.svg';
import round from '../../../public/img/shape-round.svg';
import baguette from '../../../public/img/shape-baguette.svg';
import radiant from '../../../public/img/shape-radiant square.svg';
import emerald from '../../../public/img/shape-emerald.svg';
import cushion from '../../../public/img/shape-cushion.svg';

const items = [
  { id: 1, name: 'Pear', img: pear },
  { id: 2, name: 'Emerald', img: emerald },
  { id: 3, name: 'Heart', img: heart },
  { id: 4, name: 'Marquise', img: marquise },
  { id: 5, name: 'Oval', img: oval },
  { id: 6, name: 'Princess', img: princess },
  { id: 7, name: 'Round', img: round },
  { id: 8, name: 'Baguette', img: baguette },
  { id: 9, name: 'Radiant', img: radiant },
  { id: 10, name: 'Cushion', img: cushion },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    }
  ],
};

const DiamondSection = () => {
  return (
    <section className="featured-collection pt-14">
      <h2 className="fc-title">Diamond Collection</h2>
      <Slider {...sliderSettings} className="fc-slider">
        {items.map(item => (
          <div className="fc-card" key={item.id}>
            <img src={item.img.src} alt={item.name} className="fc-img" />
            <div className="fc-info">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DiamondSection;
