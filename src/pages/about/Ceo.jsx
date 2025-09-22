import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";

const Ceo = () => {
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
      <section>
        <div className="contant1160 mb200 mt100">
          <div className="row ">
            <div className="col-lg-7">
              <p className="f52 fw600 grayn1 lh160">
                자연과 사람을
                <br />
                <img style={{ verticalAlign: "bottom" }} src="/common/imgs/company/people.png" alt="" /> 소중히 여긴다
                <br />
              </p>
              <p className="f52 fw600 grayn2 f_pp italic lh160">Nature & People</p>
            </div>
            <div className="col-lg-5">
              <p className="f22 fw400 grayn1 lh170 mt100">
                ㈜자연과사람들은 자연과 사람을
                <br /> 소중히 여기며 품질과 기술력을
                <br /> 인정받은 음료 전문 기업입니다.
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
                <span className="f40 fw600">억원</span>
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
                <span className="white f40 fw600">억원</span>
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
                  안녕하십니까?
                  <br />
                  ㈜자연과사람들 대표이사 정연호입니다.
                </p>
                <p className="mt30">
                  (주)자연과사람들은 "자연과 사람을 소중히 여긴다"라는 기업이념을 바탕으로 자연과의 조화를 통해 사람들이
                  존재한다는 자연제일주의와, 사람들의 건강하고 행복한 삶을 지켜주려는 인간제일주의를 경영철학으로 삼아
                  2001년 11월 1일에 새롭게 태어난 음료 전문 생산기업입니다.
                </p>

                <p className="mt30">
                  (주)자연과사람들은 청정지역이며 죽향인 전라남도 담양의 12,000평 대지 위에 "멸균팩 제품, 살균팩 제품,
                  캔 제품" 등을 위생적으로 생산할 수 있는 설비를 갖추고 있으며, 설립 이후 최상의 제품을 제공하고자
                  식품안전인증 (ISO9001, FSSC22000, HACCP)과 어린이 기호인증, 유기가공식품인증 등의 품질인증을 꾸준히
                  획득하였고, 글로벌 기업의 사전 품질심사(코카콜라 GAO 심사, 동서식품 MONDELEZ 심사)를 통과하여 기술력과
                  품질 우수성을 인정 받았습니다. 또한 R&D 분야에 대한 적극적인 투자로 OEM 생산 (주문자 상표부착) 뿐만
                  아니라 ODM 생산 (자체개발주문)도 병행하고 있습니다.
                </p>
                <p className="mt30">
                  이러한 노력의 결과로 그간 고객사의 요구에 부응하는 최상의 품질과 제품을 공급하여 업계의 좋은 평가를
                  받고 있습니다. 이제 저희는 여기서 만족하지 않고 더욱 적극적인 투자로 경쟁력 있는 종합식품회사로
                  성장하기 위한 도약을 준비하고 있습니다.
                </p>
                <p className="mt30">
                  나날이 치열해지는 경영환경과 기술혁신 시대 속에서 저희 자연과사람들은 앞으로도 철저한 품질관리와
                  부단한 연구 개발을 통해 기업 이념에 부합하는 기업으로 거듭나, 고객만족을 위한 최상의 제품으로
                  보답하겠습니다.
                </p>
                <p className="mt30">감사합니다.</p>

                <p className="mt30 text-right">
                  대표이사 정 연 호
                  <br />
                  YEN HO, CHUNG / CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceo;
