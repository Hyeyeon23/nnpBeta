import React from "react";

import FooterReactEN from "../../../components/common/FooterReactEN";
import Meta from "../../../components/common/Meta";
import CustomInquiryNoMoreEN from "../../../components/customer/CustomInquiryNoMoreEN";
import HeaderEN from "../../../components/common/HeaderEN";

const ContactEN = () => {
  return (
    <>
      <Meta title="자연과사람들 1:1문의"></Meta>
      <HeaderEN></HeaderEN>
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
                    Do you have a question for Nature & People?
                    <br />
                    If you couldn’t find your answer in the FAQ, please leave your inquiry below.
                    <br />
                    For a quick response, please ensure your email address is accurate.
                  </p>
                </div>
              </div>
            </section>
            <CustomInquiryNoMoreEN></CustomInquiryNoMoreEN>
          </main>
          <div class="loading-form">
            <div class="sk-three-bounce">
              <div class="sk-child sk-bounce1"></div>
              <div class="sk-child sk-bounce2"></div>
              <div class="sk-child sk-bounce3"></div>
            </div>
          </div>
          <FooterReactEN></FooterReactEN>
        </div>
      </div>
    </>
  );
};

export default ContactEN;
