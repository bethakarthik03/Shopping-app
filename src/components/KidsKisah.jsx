import React from 'react';
import ProductPage from './ProductPage';
import campus from '../Assets/campussutra.jpeg';
import campus1 from '../Assets/campus1.jpeg';
import campus2 from '../Assets/campus2.jpeg';
import campus3 from '../Assets/campus3.jpeg';

const KidsCampus = () => {
  const product = {
    id: 12,
    name: "Kids Black Solid Casual Shirt",
    img: campus,
    price: "₹1,235"
  };

  const thumbnails = [campus, campus1, campus2, campus3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={campus}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Black Solid Casual Shirt"
      rating="3.4"
      reviews="Based on 25 ratings"
      price="₹1,235"
      discount="35% Off"
      sizes={sizes}
    />
  );
};

export default KidsCampus;
