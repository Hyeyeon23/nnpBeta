import Header from "../../../components/common/Header";
import FooterReact from "../../../components/common/FooterReact";
import Meta from "../../../components/common/Meta";

const FaqEN = ({ lang, setLang }) => {
  return (
    <>
      <Meta title="자연과사람들 자주묻는 질문"></Meta>
      <Header></Header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="breadcrumb-section__area breadcrumb-section breadcrumb-section-4 breadcrumb-section-2__space border-bottom">
              <div className="container">
                <div className="breadcrumb-section__shape__wrap">
                  <div className="breadcrumb-section__border__shape" />
                  <div className="breadcrumb-section__border__shape" />
                  <div className="breadcrumb-section__border__shape" />
                  <div className="breadcrumb-section__border__shape" />
                </div>
                <div className="breadcrumb-section__text">
                  <h3 className="f_pp f130 fw600 lh100">Products FAQ</h3>
                </div>
              </div>
            </section>

            <section className="faq-section__area faq-section faq-section-2 body-bg section-space">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="faq-section__content">
                      <p className="f30 fw500 lh170 grayn1 center">
                        A collection of frequently asked questions from Nature &amp; People customers for quick and easy
                        reference.
                      </p>

                      <div className="faq-section__faq mt100">
                        <div className="accordion" id="accordionExamplee">
                          {/* 1 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button grayn1"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1">
                                What is an aseptic pack?
                              </button>
                            </h2>
                            <div
                              id="collapse1"
                              className="accordion-collapse collapse show"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  An aseptic pack is a multi-layer package made of 6–7 layers of paper, aluminum foil,
                                  and polyethylene.
                                  <br />
                                  It effectively blocks external light, air, moisture, and microorganisms, allowing
                                  sterilized contents to be stored safely at room temperature for long periods without
                                  preservatives.
                                  <br />
                                  We use aseptic packaging from Tetra Pak and SIG.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 2 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2">
                                Do you have products that can be heated in a microwave?
                              </button>
                            </h2>
                            <div
                              id="collapse2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  Yes. Some products can be made using a special aseptic pack designed without aluminum.
                                  <br />
                                  Instead, it uses a multilayer heat-resistant film, making it safe to warm directly in
                                  the microwave.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 3 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3">
                                How are products pasteurized or sterilized?
                              </button>
                            </h2>
                            <div
                              id="collapse3"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  Depending on the beverage type, the contents are heated at a designated temperature
                                  and for a specified duration to ensure even sterilization. This process suppresses
                                  microbial growth and keeps the product safe for ambient storage.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 4 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4">
                                What is the MOQ (Minimum Order Quantity)?
                              </button>
                            </h2>
                            <div
                              id="collapse4"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  The MOQ varies depending on the type of packaging equipment and product
                                  characteristics.
                                  <br />
                                  Typically, the minimum quantity corresponds to the standard output from one production
                                  run of the relevant line.
                                  <br />
                                  <br />
                                  * Additional order-related information by packaging type is available on the main
                                  page.
                                  <br />
                                  <a href="/">
                                    <span className="btn01 mt50 f13">Go to Main Page</span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 5 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse5">
                                What are particle (solid-in-beverage) drinks?
                              </button>
                            </h2>
                            <div
                              id="collapse5"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  Particle drinks are beverages containing chewable solid inclusions.
                                  <br />
                                  Typical particle types include nata de coco, aloe vera, and basil seeds. Currently, we
                                  manufacture products using nata de coco.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 6 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse6">
                                What information is required to begin OEM/ODM collaboration?
                              </button>
                            </h2>
                            <div
                              id="collapse6"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  We require basic details such as product concept (flavor, volume, format), expected
                                  production quantity, and intended sales channel.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 7 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse7">
                                How are raw materials sourced?
                              </button>
                            </h2>
                            <div
                              id="collapse7"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  In principle, we procure all raw materials directly.
                                  <br />
                                  However, depending on product characteristics, customer-supplied ingredients are
                                  possible through toll-processing or partial toll-processing arrangements.
                                  <br />
                                  Each material type has its own MOQ, adjusted through consultation.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 8 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse8">
                                How are design and production orders handled?
                              </button>
                            </h2>
                            <div
                              id="collapse8"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  We provide container-specific dielines according to the packaging type and size.
                                  <br />
                                  Once design and labeling are reviewed, production proceeds with the finalized
                                  contract.
                                </p>
                                <p className="mt20" style={{ maxWidth: "600px" }}>
                                  <img className="img100" src="/common/imgs/common/faq01.jpg" alt="" />
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 9 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse9">
                                What is the typical shelf life of the products?
                              </button>
                            </h2>
                            <div
                              id="collapse9"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>
                                  Shelf life varies by packaging format and product category.
                                  <br />
                                  Aseptic pack products:
                                  <br />
                                  Soy milk &amp; fruit/vegetable beverages: 6 months
                                  <br />
                                  Sterilized milk: 10 weeks to 4 months
                                  <br />
                                  Canned products: 1 to 2 years
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 10 */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse10">
                                Can product volume be adjusted?
                              </button>
                            </h2>
                            <div
                              id="collapse10"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExamplee">
                              <div className="accordion-body">
                                <p>Yes. We currently produce products ranging from 125 ml to 1000 ml.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <FooterReact></FooterReact>
        </div>
      </div>
    </>
  );
};

export default FaqEN;
