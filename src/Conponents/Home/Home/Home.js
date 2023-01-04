import React from 'react';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Slider/Slider';
import Subscription from '../Subscription/Subscription';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ProductSection></ProductSection>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;