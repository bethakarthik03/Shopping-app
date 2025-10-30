import React from 'react';
import ProductPage from './ProductPage';
import puma from '../Assets/puma.jpeg';
import puma1 from '../Assets/puma1.jpeg';
import puma2 from '../Assets/puma2.jpeg';
import puma3 from '../Assets/puma3.jpeg';

const KidsPuma = () => {
  const product = {
    id: 10,
    name: "Kids Smashic Unisex White Sneakers",
    img: puma,
    price: "₹2,250"
  };

  const thumbnails = [puma, puma1, puma2, puma3];
  const sizes = ['1', '2', '3', '4', '5'];

  return (
    <ProductPage
      product={product}
      mainImage={puma}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Smashic Unisex White Sneakers"
      rating="3.9"
      reviews="Based on 1541 ratings"
      price="₹2,250"
      discount="50% Off"
      sizes={sizes}
    />
  );
};

export default KidsPuma;
