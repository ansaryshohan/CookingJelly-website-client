import React from 'react';
import HeadTitle from '../../../Shared/HeadTitle';
import CountDown from '../CountdownSection/CountDown';
import ProductSection from '../ProductSection/ProductSection';
import Subscription from '../Subscription/Subscription';
import Team from '../Subscription/Team';
import SliderItems from '../Slider/SliderItems';

const Home = () => {
  return (
    <div>
      <HeadTitle title="Home"></HeadTitle>

      <SliderItems/>
      <ProductSection></ProductSection>
      <CountDown></CountDown>
      <Team></Team>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;