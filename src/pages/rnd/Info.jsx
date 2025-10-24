import React from "react";

const Info = () => {
  return (
    <>
      <section>
        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-7">
              <p className="f52 fw600 grayn1 lh160 rnd_ill">
                자연과사람들
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="/common/imgs/business/rnd.png"
                  alt="연구소 일러스트"
                />{" "}
                식품안전연구소
                <br />
              </p>
              <p className="f30 fw700 grayn3 f_pp italic lh160 mt10">Food Safety Research Institute</p>
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

        <div className="contant1460 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p>
                <img src="/common/imgs/business/rnd01.jpg" alt="비커에 실험하는 모습" />
              </p>
            </div>
          </div>
        </div>

        <div className="contant1160 mt100">
          <div className="row">
            <div className="col-lg-12">
              <p className="f27 fw500 grayn1 lh160 center">
                시장 변화에 대응하는 유연한 체계와 축적된 기술&middot;연구개발 노하우를 기반으로,
                <br className="wView" />
                제품 안정성과 철저한 생산 원칙을 지키며 고객 맞춤형 완제품까지 제공하는
                <br className="wView" />
                고도화된 ODM 시스템을 운영합니다.
              </p>
            </div>

            <div className="col-lg-6 mt50">
              <p className="f20 fw400 grayn1 lh150">
                자연과사람들 식품안전연구소(Food Safety Research Institute)는 고객 요구 변화에 대응하고, 기술력을 확보한
                기업만이 살아남는 무한경쟁체제에서 연구개발을 위해 고객의 어떠한 요구도 부응할 수 있는 체계를 갖추고
                제품의 안정성 확보와 철저한 제품 생산 원칙을 유지하고 개선하는데 핵심적인 역할을 담당하는 곳입니다.
              </p>
            </div>

            <div className="col-lg-6 mt50">
              <p className="f20 fw400 grayn1 lh150">
                다양한 유형의 음료 생산 기술력과 연구개발 노하우로 변화하는 시장 요건에 부합하는 제품개발 및
                품질안정성을 검사하고 개선하는 역할을 하고 있으며, 고객의 요구에 맞춰 상품개발에서 완제품에 이르기까지
                완벽한 ODM시스템 제공하여 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt100 mb200">
        <div className="contant1460">
          <div className="row">
            <div className="col-md-3 col-6">
              <p className="f130 fw900 grayn2 lh150 center rnd_line">01</p>
              <div className="rndBox mt20 round20 mt40">
                <p>
                  <img src="/common/imgs/business/rnd02.jpg" alt="연구개발 이미지" />
                </p>
                <p className="f23 fw500 grayn1 mt30">연구개발</p>
                <p className="f20 fw400 grayn1 mt20 lh150">
                  끊임없는 연구를 통해 소비자의 요구와 트렌드에 맞는 새로운 제품을 개발합니다.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <p className="f130 fw900 grayn2 lh150 center rnd_line">02</p>
              <div className="rndBox mt20 round20 mt40">
                <p>
                  <img src="/common/imgs/business/rnd03.jpg" alt="분석실험 이미지" />
                </p>
                <p className="f23 fw500 grayn1 mt30">정확한 분석실험</p>
                <p className="f20 fw400 grayn1 mt20 lh150">
                  첨단 장비와 정밀한 실험 과정을 통해 원료와 성분을 철저히 분석합니다.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6 mt30m">
              <p className="f130 fw900 grayn2 lh150 center rnd_line">03</p>
              <div className="rndBox mt20 round20 mt40">
                <p>
                  <img src="/common/imgs/business/rnd04.jpg" alt="제품검사 이미지" />
                </p>
                <p className="f23 fw500 grayn1 mt30">제품검사</p>
                <p className="f20 fw400 grayn1 mt20 lh150">
                  국내외 기준을 충족하는 까다로운 검사 절차를 통해 제품의 품질을 보증합니다.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-6 mt30m">
              <p className="f130 fw900 grayn2 lh150 center rnd_line">04</p>
              <div className="rndBox mt20 round20 mt40">
                <p>
                  <img src="/common/imgs/business/rnd05.jpg" alt="제품 안전성 이미지" />
                </p>
                <p className="f23 fw500 grayn1 mt30">제품 안전성</p>
                <p className="f20 fw400 grayn1 mt20 lh150">
                  안전하고 믿을 수 있는 제품만을 선별하여 고객에게 제공합니다.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
