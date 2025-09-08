import React from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";

const Contact = () => {
  return (
    <>
      <Header></Header>
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
            <section className="contact-section__area contact-section section-space">
              <div className="container">
                <div className="row contant1160">
                  <div className="col-md-12">
                    <div className="contact-section__form__wrapper">
                      <form action="#">
                        <div className="contact-section__form">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="contact-section__input">
                                <input type="text" placeholder="업체명" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="contact-section__input">
                                <input type="text" placeholder="연락처" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="contact-section__input">
                                <input type="text" placeholder="이메일" />
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="contact-section__input">
                                <input type="text" placeholder="제목" />
                              </div>
                            </div>

                            <div className="col-12">
                              <textarea
                                className="order_textarea"
                                placeholder="문의사항에 대한 내용을 작성해 주세요."></textarea>
                            </div>
                          </div>
                          <div className="center">
                            <button type="submit" className="mt50 title-btn rr-btn btn-transparent form-btn">
                              <span>
                                <i className="fa-regular fa-arrow-right"></i>
                              </span>
                              문의하기
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div class="loading-form">
            <div class="sk-three-bounce">
              <div class="sk-child sk-bounce1"></div>
              <div class="sk-child sk-bounce2"></div>
              <div class="sk-child sk-bounce3"></div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Contact;
