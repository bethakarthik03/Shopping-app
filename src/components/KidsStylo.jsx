import React from 'react';
import ProductPage from './ProductPage';
import styli from '../Assets/stylimendark.jpeg';
import thumb1 from '../Assets/thumb1.jpeg';
import thumb2 from '../Assets/thumb2.jpeg';
import thumb3 from '../Assets/thumb3.jpeg';

const KidsStyli = () => {
  const product = {
    id: 9,
    name: "Kids Dark Blue Ballon Fit Dark Wash Denim",
    img: styli,
    price: "₹1,440"
  };

  const thumbnails = [styli, thumb1, thumb2, thumb3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={styli}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Dark Blue Ballon Fit Dark Wash Denim"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹1,440"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default KidsStyli;
