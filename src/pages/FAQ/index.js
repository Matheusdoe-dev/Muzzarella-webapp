import React from "react";
// components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import Slides from "../../components/Slides/index";
// style
import { FooterImg } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/bg-page-title-faq.jpg";

const FAQ = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Frequently Questions" />

      <Slides />
      <FooterImg />
      <Footer />
    </>
  );
};

export default FAQ;
