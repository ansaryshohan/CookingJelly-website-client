import React from 'react';
import HeadTitle from '../../../Shared/HeadTitle';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Slider/Slider';
import Subscription from '../Subscription/Subscription';

const Home = () => {
  return (
    <div>
      <HeadTitle title="Home"></HeadTitle>

      <Slider></Slider>
      <ProductSection></ProductSection>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;