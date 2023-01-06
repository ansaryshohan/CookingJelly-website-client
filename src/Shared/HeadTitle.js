import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTitle = ({title}) => {
  return (
    <Helmet>
    <title>{title}- CookingJelly</title>
  </Helmet>
  );
};

export default HeadTitle;