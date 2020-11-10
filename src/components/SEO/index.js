import React from "react";
import Helmet from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>Muzzarella - {title}</title>
    </Helmet>
  );
};

export default SEO;
