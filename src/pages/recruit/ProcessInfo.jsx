import React from "react";

const ProcessInfo = () => {
  return (
    <div className="body-bg">
      <section className="contant1100 pt200 pb200">
        <div className="row">
          <div className="col-lg-7">
            <p className="f52 fw600 grayn1 lh140">채용 프로세스</p>
          </div>
          <div className="col-lg-5">
            <p className="f20 fw400 grayn1 lh170 mt30m">
              공정하고 객관적인 채용 절차를 통해 <br />
              최고의 인재를 확보하기 위해 노력합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="planning-section__area planning-section body-bg section-space-bottom mView1200">
        <div className="content1100">
          <div className="row">
            <div className="col-md-12">
              <p className="center">
                <img src="/common/imgs/company/recruit_step.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="planning-section__area planning-section body-bg section-space-bottom wView1200 pb200">
        <div className="planning-section__wrapper mb-minus-30 recruit_step_wrap">
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn5 f60 fw700">01</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content recruit_step">
              <h3 className="planning-section__title f30 fw500">서류접수</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">02</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">서류전형</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">03</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">인적성검사</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">04</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">1차 면접</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">05</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">신체검사</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn2 f60 fw700">06</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content">
              <h3 className="planning-section__title f30 fw500">2차 면접</h3>
            </div>
          </div>
          <div className="planning-section__single__wrapper mb-30 p-relative">
            <div className="planning-section__number grayn5 f60 fw700">07</div>
            <div className="planning-section__shape">
              <img src="/common/imgs/icon/planning-arrow-icon.png" alt="icon" />
            </div>
            <div className="planning-section__content recruit_step">
              <h3 className="planning-section__title f27 fw500">최종합격자 발표</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessInfo;
