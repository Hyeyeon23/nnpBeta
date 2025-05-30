import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="footer heading-bg overflow-hidden p-relative z-1">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-footer-title hero">
              <h2 className="top-title _split_text">Let’s Build</h2>
              <p className="dec rr_title_anim">
                Orci natoque penatibus magnis dis parturien <br />
                mones nasceu mus ornare augue mass lacnia <br />
                magna commodo Cras nulla.
              </p>
            </div>
            <div className="hero">
              <h2 className="title _split_text">Something Great.</h2>
            </div>
          </div>

          <div className="row footer__wrap p-relative">
            <div className="col-lg-4 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo mb-20">
                  <a href="index.html">
                    <img src="assets/imgs/btn_3d_01.png" alt="정면" />
                  </a>
                </div>
                <div className="footer__content">
                  <p className="dec">
                    M4 Heston m4 motor service area, Phoenix <br />
                    TW5 9NB, United Kingdom
                  </p>
                </div>
                <div className="footer__info">
                  <a href="tel:234574328254">(+234) 574-328-254</a>
                  <a href="mailto:example778@gmail.com">example778@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-2th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <h4 className="mt-md-0">Services</h4>
                </div>
                <div className="footer__link">
                  <ul>
                    {["UI/UX Design", "Web Design", "Branding", "Web Flow", "Development"].map((service, idx) => (
                      <li key={idx}>
                        <a href="service.html">
                          <i className="fa-solid fa-period"></i> {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-3th-left">
                <div className="footer__widget-title mb-30 mb-md-10 mb-sm-10 mb-xs-10">
                  <h4>Support</h4>
                </div>
                <div className="footer__link">
                  <ul>
                    {[
                      { name: "Style guide", href: "about-us.html" },
                      { name: "License", href: "contact.html" },
                      { name: "Changelog", href: "service-details.html" },
                      { name: "404 Error", href: "404.html" },
                      { name: "Changelog", href: "service.html" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href}>
                          <i className="fa-solid fa-period"></i> {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-4th-left">
                <div className="footer__widget-title mb-35 mb-md-20 mb-sm-20 mb-xs-20">
                  <h4>Newsletter</h4>
                </div>
                <p className="dec">Don’t miss out—join now for promotions & deals.</p>
                <div className="footer__subscribe">
                  <div className="footer-form">
                    <form action="#" className="rr-subscribe-form">
                      <input className="form-control" type="email" name="email" placeholder="Enter your email" />
                      <input type="hidden" name="action" value="mailchimpsubscribe" />
                      <button type="submit" className="submit">
                        Subscribe
                      </button>
                      <div className="clearfix"></div>
                      <input type="checkbox" className="form-check-input" id="agree" />
                      <label className="form-check-label" htmlFor="agree">
                        I hereby accept all terms & conditions.
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom-wrapper">
          <div className="container">
            <div className="footer__bottom">
              <div className="footer__copyright">
                <p>
                  © 2025 Faizen. All Rights Reserved. <a href="http://rrdevs.net">RRDevs</a>
                </p>
              </div>
              <div className="footer__copyright-menu">
                <ul>
                  {[
                    { name: "LinkedIn", href: "https://www.linkedIn.com/" },
                    { name: "Facebook", href: "https://www.facebook.com/" },
                    { name: "Twitter", href: "https://www.twitter.com/" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
