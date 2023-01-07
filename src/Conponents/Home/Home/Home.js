import React from 'react';
import HeadTitle from '../../../Shared/HeadTitle';
import CountDown from '../CountdownSection/CountDown';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Slider/Slider';
import Subscription from '../Subscription/Subscription';

const Home = () => {
  return (
    <div>
      <HeadTitle title="Home"></HeadTitle>

      <Slider></Slider>
      <ProductSection></ProductSection>
      <CountDown></CountDown>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;