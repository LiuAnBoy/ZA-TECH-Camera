import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <div>
      <Helmet>
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Helmet>
    </div>
  );
};

export default Head;
