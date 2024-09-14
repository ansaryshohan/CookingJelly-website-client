import React from 'react';
import HeadTitle from '../../../Shared/HeadTitle';
import CountDown from '../CountdownSection/CountDown';
import ProductSection from '../ProductSection/ProductSection';
import Subscription from '../Subscription/Subscription';
import Team from '../Subscription/Team';
import SliderItems from '../Slider/SliderItems';
import ShareRecipeSection from '../shareRecipe/ShareRecipeSection';
import BlogSection from '../blog/BlogSection';
import CategorySection from '../categories/CategorySection';

const Home = () => {
  return (
    <div>
      <HeadTitle title="Home"/>

      <SliderItems/>
      <ProductSection/>
      <ShareRecipeSection/>
      <CategorySection/>
      <CountDown/>
      <BlogSection/>
      <Team/>
      <Subscription/>
    </div>
  );
};

export default Home;