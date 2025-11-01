import React from 'react';
import ProductPage from './ProductPage';
import libas from '../Assets/libas1.jpeg';
import libas1 from '../Assets/libas1.jpeg';
import libas2 from '../Assets/libas2.jpeg';
import libas3 from '../Assets/libas3.jpeg';

const WomenLibas = () => {
  const product = {
    id: 5,
    name: "Women Libas Dress",
    img: libas,
    price: "₹4,880"
  };

  const thumbnails = [libas, libas1, libas2, libas3];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={libas}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Libas Dress"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹4,880"
      discount="65% Off"
      sizes={sizes}
    />
  );
};

export default WomenLibas;
