import React from "react";
// components
import Header from "../../components/Header/index";
import PageTitle from "../../components/Page-title/index";
import Footer from "../../components/Footer/index";
import QuestionSection from "../../components/Question-section/index";
import AccordionList from "../../components/Accordion-list/index";
// style
import { FooterImg } from "./styles";
// imgs
import pageTitleImg from "../../assets/imgs/bg-page-title-faq.jpg";

const FAQ = () => {
  return (
    <>
      <Header />
      <PageTitle background={pageTitleImg} title="Frequently Questions" />
      <AccordionList />
      <QuestionSection />
      <FooterImg />
      <Footer />
    </>
  );
};

export default FAQ;
