import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import Meta from "../../../components/common/Meta";

const CeoEN = () => {
  /**
   * published 에서 odometer 애니메이션 효과가 제대로 적용되지 않아
   * react-odometerjs lib install 하여, 따로 구현함
   */
  const [capital, setCapital] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // 컴포넌트 마운트 후 애니메이션 시작
    const timer = setTimeout(() => {
      setCapital(44); // data-count 값
      setRevenue(671);
    }, 500); // preloader fadeOut 후 시점과 맞춰 조정

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Meta title={"자연과사람들 인사말"}></Meta>
      <section>
        <div className="contant1160 mb200 mt100">
          <div className="row ">
            <div className="col-lg-7">
              <p className="f52 fw600 grayn1 lh160">
                We Value
                <br />
                <img style={{ verticalAlign: "bottom" }} src="/common/imgs/company/people.png" alt="" /> Nature and
                People
                <br />
              </p>
              <p className="f52 fw600 grayn2 f_pp italic lh160">Nature & People</p>
            </div>
            <div className="col-lg-5">
              <p className="f22 fw400 grayn1 lh170 mt100">
                With the philosophy of valuing nature and people, Nature & People Co., Ltd is a beverage manufacturer
                recognized for its product quality and technological excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section__area portfolio-section body-bg">
        <div className="portfolio-section__wrapper contant1520">
          <div className="portfolio-section__item item-1">
            <div className="portfolio-section__thumb">
              <img src="/common/imgs/company/ceo01.jpg" alt="image not found" />
            </div>
          </div>
          <div className="portfolio-section__item item-2">
            <div className="portfolio-section__thumb">
              <img src="/common/imgs/company/ceo02.jpg" alt="image not found" />
            </div>
          </div>
          <div className="portfolio-section__item item-3">
            <div className="portfolio-section__content">
              <span>Our Capital</span>
              <div>
                {/* <span className="odometer f120 fw600 f_pp odometer-auto-theme" data-count="44">
                  0
                </span> */}
                <Odometer
                  value={capital}
                  format="d"
                  duration={3000} // 3초 애니메이션
                  className="odometer f120 fw600 f_pp odometer-auto-theme"
                />
                <span className="f40 fw600">billion</span>
              </div>
            </div>
          </div>
          <div className="portfolio-section__item item-4">
            <div className="portfolio-section__content bg_gra">
              <span>Company Revenue</span>
              <div>
                {/* <span className="f120 fw600 white f_pp odometer odometer-auto-theme" data-count="671">
                  0
                </span>  */}
                <Odometer
                  value={revenue}
                  format="d"
                  duration={3000} // 3초 애니메이션
                  className="f120 fw600 white f_pp odometer odometer-auto-theme"
                />
                <span className="white f40 fw600">billion</span>
              </div>
            </div>
          </div>
          <div className="portfolio-section__item item-5">
            <div className="portfolio-section__thumb">
              <img src="/common/imgs/company/ceo03.jpg" alt="image not found" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg_dark">
        <div className="contant900 mt100">
          <div className="row">
            <div className="col-md-12">
              <div className="messageBox pt200">
                <p>
                  Welcome to Nature &amp; People,
                  <br />
                  It is my great pleasure to welcome you.
                </p>

                <p className="mt30">
                  Nature &amp; People, based on the founding philosophy of valuing nature and people, was founded as a
                  specialized end-to-end beverage manufacturer on November 1st, 2001. We embrace a management philosophy
                  rooted in harmony with nature and a commitment to supporting the health and happiness of people.
                </p>

                <p className="mt30">
                  Located in Damyang, Jeollanam-do—an area renowned for its pristine environment—our 39,600 m² facility
                  is equipped to hygienically produce aseptic packs, pasteurized packs, and canned beverages. Since our
                  founding, we have continuously pursued the highest product quality, earning certifications such as ISO
                  9001, FSSC 22000, HACCP, the Children’s Food Preference Certification, and Organic Processing
                  Certification. We have also passed global pre-quality audits, including Coca-Cola’s GAO audit and
                  Mondelez (Dongsuh Foods) evaluations, further validating our technological reliability and excellence.
                </p>

                <p className="mt30">
                  In addition, with continuous investment in R&amp;D, we offer end-to-end OEM and ODM manufacturing
                  services.
                </p>

                <p className="mt30">
                  As a result, we have earned recognition for our quality and excellence, meeting diverse customers’
                  needs.
                </p>

                <p className="mt30">
                  This is just the beginning. With more strategic and active investment, we are preparing to grow into a
                  highly competitive and comprehensive food company.
                </p>

                <p className="mt30">
                  In an era of rapid technological change and fierce competition, Nature &amp; People will grow in line
                  with our founding philosophy through thorough quality management and continuous R&amp;D investment,
                  delivering the highest-quality products that ensure customer satisfaction.
                </p>

                <p className="mt30">Thank you</p>

                <p className="mt30 text-right">YEN HO, CHUNG / CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoEN;
