import React, { useEffect, useRef } from "react";
import Header from "../../components/common/Header";
import FooterReact from "../../components/common/FooterReact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Wizus = () => {
  return (
    <>
      {/* Brand Swiper section */}
      <section>
        <div className="contant1760">
          <div className="row">
            <div className="col-md-12 mt100">
              <Swiper modules={[Pagination]} pagination={{ clickable: true }} loop={true} className="ourBrandSwiper">
                <SwiperSlide>
                  <img src="/common/imgs/brand/wizus01.jpg" alt="위져스" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/wizus02.jpg" alt="자연과사람들이만든" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/common/imgs/brand/wizus03.jpg" alt="방방곡곡" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="project-section-2__area project-section-2  section-space-top-160 section-space-bottom-160 brandCard">
        <div className="container">
          <div className="section__title-wrapper section__title-wrapper-3 hero">
            <div className="wizus_logo">
              <img src="/common/imgs/brand/wizus_logo.png" alt="방방곡곡" />
            </div>
            <p className="f30 fw500 lh140 ">
              WITH ME, WITH US 위져스!
              <br />
              WIZUS는 HEALTH & 뉴트리션 음료 전문 브랜드입니다.
            </p>
          </div>
          <div className="project-section-2__wrapper">
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130">What is WIZUS?</p>
                    {/* 20250929 수정 */}
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      2023년 첫 문을연 WIZUS는 자연과사람들의 HEALTH & 뉴트리션 음료 전문 브랜드로, 다년간의 OEM 및 ODM
                      경험으로 얻은 노하우로 직접 꼼꼼한 영양설계부터 생산까지 하고있습니다.
                    </p>
                    {/* //20250929 수정 */}

                    <div className="mt80">
                      <img src="/common/imgs/brand/wizus10.png" alt="위저스 마크" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus05.jpg" alt="위져스 녹차와 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">flavor 01.</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Lemon Iced Tea
                      <br />
                      상큼한 레몬아이스티맛
                    </p>
                    {/* <!-- 20250929 수정--> */}
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      아이스티의 시원함과 클리어한 워터타입으로
                      <br />
                      부담없는 단백질 보충
                    </p>
                    {/* <!-- //20250929 수정--> */}
                    <div className="project-section-2__tag wizustag01">
                      <ul>
                        <li>#상큼한 게 땡길 때</li>
                        <li>#부담 없이 즐기고 싶을 때</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus06.jpg" alt="위져스 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">Is it really protein?</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Lemon Iced Tea
                      <br />
                      상큼한 레몬아이스티맛
                    </p>
                    <div className="wizus_icon mt40">
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico01.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">상큼한 레몬 아이스티맛</p>
                          <p className="f16 fw400 grayn3">맑고 깔끔한 레몬 아이스티맛으로 물처럼 시원하게 마셔요.</p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico02.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">단백질 18g 함유</p>
                          <p className="f16 fw400 grayn3">맑고 깔끔한 레몬 아이스티맛으로 물처럼 시원하게 마셔요.</p>
                        </li>
                      </ul>
                      {/* 20250929 수정 */}
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico03.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">균형 잡힌 비타민 7종</p>
                          <p className="f16 fw400 grayn3">
                            비타민C, 비타민A, 나이아신을 포함해 우리 몸에 필요한 비타민 7종을 담았어요.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico04.png" alt="위져스 레몬제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">부담 없는 칼로리</p>
                          <p className="f16 fw400 grayn3">
                            80칼로리라는 낮은 칼로리로 부담 없이 18g의 단백질을 섭취해요.
                          </p>
                        </li>
                      </ul>
                      {/* //20250929 수정 */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus07.jpg" alt="위져스 레몬제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f23 f_pp fw_400 grayn3">flavor 02.</p>
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Green Tea Latte
                      <br />
                      달콤한 녹차라떼맛
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      달콤 향긋한 녹차라떼맛으로
                      <br />
                      맛있고 든든한 단백질 보충
                    </p>
                    <div className="project-section-2__tag wizustag02">
                      <ul>
                        <li>#녹차라떼</li>
                        <li>#단백질보충</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus08.jpg" alt="위져스 녹차제품" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2__item project-panel">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-section-2__content">
                    <p className="f40 fw600 grayn1 f_pp lh130 mt20">
                      Green Tea Latte
                      <br />
                      달콤한 녹차라떼맛
                    </p>
                    <p className="f20 fw400 grayn1 mt30 lh150">
                      달콤 향긋한 녹차라떼맛으로
                      <br />
                      맛있고 든든한 단백질 보충
                    </p>
                    <div className="wizus_icon mt40">
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico05.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">향긋한 녹차라떼맛</p>
                          <p className="f16 fw400 grayn3">
                            단백질 이취 없이 향긋한 녹차라떼맛으로 맛있게 단백질을 섭취해요.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico06.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">단백질 20g 함유</p>
                          <p className="f16 fw400 grayn3">
                            하루 권장량 평균 20~30%의 단백질을 함유해 간편하게 섭취 가능해요.
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <img src="/common/imgs/brand/wizus_ico07.png" alt="위져스 녹차제품" />
                        </li>
                        <li>
                          <p className="f20 fw500 grayn1">균형 잡힌 비타민 7종</p>
                          <p className="f16 fw400 grayn3">
                            비타민C, 비타민A, 나이아신을 포함해 우리 몸에 필요한 비타민 7종을 담았어요.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="project-section-2__thumb">
                    <img src="/common/imgs/brand/wizus09.jpg" alt="위져스 녹차젲품" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-panel-area"></div>
      </section>

      <section>
        <div className="contant1160 mb200">
          <div className="row">
            <div className="col-lg-12">
              <p className="f45 fw500 grayn1 lh130 center">
                <span className="fw600">자연에서 온 한 모금,</span>
                <br />
                자연과사람들 브랜드를 소개합니다.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt100">
              <div className="award-section__wrap brand_wrap">
                {/* 방방곡곡 */}
                <div className="award-section__item p-relative rr-hover-reveal-item active">
                  <a href="/brand/healthy/sikhye">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2024</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">방방곡곡</h3>
                          <h4 className="award-section__subtitle fw400 wView">식혜음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            ‘방방곡곡’은 이름 그대로, 대한민국 곳곳에 숨겨진 전통의 맛과 사람들의 정성을 모아 현대인의
                            일상에 전하는 전통 음료 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="rr-hover-reveal-bg" data-background="/common/imgs/brand/nnpmv03.png" alt="식혜" />
                </div>

                {/* WIZUS */}
                <div className="award-section__item item-2 p-relative rr-hover-reveal-item active">
                  <a href="/brand/wizus/greenlemon">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2023</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">WIZUS</h3>
                          <h4 className="award-section__subtitle fw400 wView">단백질 음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            WITH ME, WITH US 위져스! WIZUS는 HEALTH & 뉴트리션 음료 전문 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div
                    className="rr-hover-reveal-bg"
                    data-background="/common/imgs/brand/nnpmv02.png"
                    alt="단백질 음료"
                  />
                </div>

                {/* 자연과사람들이 만든 */}
                <div className="award-section__item item-3 p-relative rr-hover-reveal-item active">
                  <a href="/brand/pb#!">
                    <div className="award-section__inner-item d-flex justify-content-between align-items-center">
                      <div className="award-section__content d-flex align-items-center">
                        <div className="award-section__year">
                          <span>2020</span>
                        </div>
                        <div className="award-section__title-box">
                          <h3 className="award-section__title fw500">자연과사람들이 만든</h3>
                          <h4 className="award-section__subtitle fw400 wView">과일 음료</h4>
                          <h4 className="award-section__subtitle fw400 mView">
                            ‘자연과사람들이 만든’은 건강한 자연의 선물과 정직한 사람의 손길이 만나 완성된 브랜드입니다.
                          </h4>
                        </div>
                      </div>
                      <div className="award-section__link">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <div
                    className="rr-hover-reveal-bg brand_over03"
                    data-background="/common/imgs/brand/nnpmv01.png"
                    alt="과일 음료"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 소개 섹션 */}
      <section>
        <div className="contant1310 mb200">
          <div className="row">
            <div className="col-lg-6 brand_rotating_box">
              <p className="brand_rotating wView">
                <img id="rotating-arrow" src="/common/imgs/shapes/main_onstop.png" alt="arrow" className="rotate" />
              </p>
              <p className="f80 f_pp grayn5 lh100">A Drink for</p>
            </div>
            <div className="col-lg-6 wView">
              {/* 20250929 수정 */}
              <p className="f20 lh140 grayn1">
                ‘자연과사람들’은 시대 변화와 라이프스타일에 맞춘
                <br className="wView" />
                다양한 브랜드 포트폴리오를 통해 폭넓고 자연스러운 음료 경험을
                <br className="wView" />
                제공하며, 앞으로도 지속적으로 그 영역을 확장해 나갈 것입니다.
              </p>
              {/* //20250929 수정 */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="f80 f_pp grayn5 lh110 f_pp">Every Moment,</p>
              <p className="f90 f_pp grayn1 lh110 f_pp fw900 text-right mt20">A Brand for Every You.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wizus;
