import React from 'react';
import HeadTitle from '../../../Shared/HeadTitle';
import CountDown from '../CountdownSection/CountDown';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Slider/Slider';
import Subscription from '../Subscription/Subscription';
import Team from '../Subscription/Team';

const Home = () => {
  return (
    <div>
      <HeadTitle title="Home"></HeadTitle>

      <Slider></Slider>
      <ProductSection></ProductSection>
      <CountDown></CountDown>
      <Team></Team>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;