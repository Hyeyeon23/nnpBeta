import React from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";

import FooterReact from "../../components/common/FooterReact";
import Meta from "../../components/common/Meta";
import CustomInquiryNoMore from "../../components/customer/CustomInquiryNoMore";

const Contact = ({ lang, setLang }) => {
  return (
    <>
      <Meta title="자연과사람들 1:1문의"></Meta>
      <Header lang={lang} setLang={setLang}></Header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space border-bottom">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                  <div className="breadcrumb-section__border__shape"></div>
                </div>
                <div className="breadcrumb-section__text">
                  <h3 className="f_pp f130 fw600 lh100">
                    Customer
                    <br />
                    consultation
                  </h3>
                </div>
                <div className="center mt100">
                  <p className="f30 fw500 lh170 grayn1">
                    자연과사람들에 문의사항이 있으신가요?
                    <br />
                    FAQ에서 못 찾으신 궁금증을 남겨주세요.
                    <br />
                    빠른 답변을 받기 위해서 정확한 이메일 주소를 작성해 주세요.
                  </p>
                </div>
              </div>
            </section>
            <CustomInquiryNoMore></CustomInquiryNoMore>
          </main>
          <div class="loading-form">
            <div class="sk-three-bounce">
              <div class="sk-child sk-bounce1"></div>
              <div class="sk-child sk-bounce2"></div>
              <div class="sk-child sk-bounce3"></div>
            </div>
          </div>
          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default Contact;
