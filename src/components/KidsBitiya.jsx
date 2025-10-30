import React from 'react';
import ProductPage from './ProductPage';
import garage from '../Assets/gargego.jpeg';
import garage1 from '../Assets/garage1.jpeg';
import garage2 from '../Assets/garage2.jpeg';
import garage3 from '../Assets/garage3.jpeg';

const KidsGarage = () => {
  const product = {
    id: 11,
    name: "Kids Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White",
    img: garage,
    price: "₹613"
  };

  const thumbnails = [garage, garage1, garage2, garage3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={garage}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹613"
      discount="65% Off"
      sizes={sizes}
    />
  );
};

export default KidsGarage;
