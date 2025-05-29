import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title || 'PT Senandung Melodi Sejahtera'}</title>
      <meta name="description" content={description || 'Percayakan Ekspor Impor Anda pada Ahlinya'} />
      <meta name="keywords" content={keywords || 'logistics, export, import, freight, shipping'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
