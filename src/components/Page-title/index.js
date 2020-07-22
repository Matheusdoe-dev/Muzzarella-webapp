import React from "react";
// styled
import { PageTitleWrapper } from "./styles";

const PageTitle = ({ title, background }) => {
  return (
    <PageTitleWrapper bg={background}>
      <h3>{title}</h3>
    </PageTitleWrapper>
  );
};

export default PageTitle;
