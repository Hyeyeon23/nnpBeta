import { useEffect } from "react";

const Research = () => {
  useEffect(() => {
    // Swiper 스크립트가 이미 HTML에 포함되어 있다고 가정
    const thumbs = new window.Swiper(".thumbs-swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 40,
      slideToClickedSlide: true,
      grabCursor: true,
      speed: 600,
      breakpoints: {
        0: { spaceBetween: 20 },
        1024: { spaceBetween: 40 },
      },
    });

    const mainBgList = document.querySelectorAll(".main-bg");
    const mainText = document.getElementById("mainText");

    const updateMain = (index) => {
      const activeSlide = thumbs.slides[index];
      if (!activeSlide) return;
      const year = activeSlide.getAttribute("data-year");
      const textHtml = activeSlide.getAttribute("data-text");

      mainBgList.forEach((bg) => {
        bg.classList.remove("active");
        if (bg.dataset.year === year) bg.classList.add("active");
      });

      mainText.innerHTML = textHtml;
    };

    thumbs.on("slideChange", () => updateMain(thumbs.activeIndex));
    thumbs.on("click", () => updateMain(thumbs.clickedIndex));
  }, []);

  return (
    <>
      <section>
        <div className="contant1160  mt100">
          <div className="row ">
            <div className="col-lg-12">
              <p className="f52 fw600 grayn1  lh160 rnd_ill">
                식품안전연구소
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="/common/imgs/business/rsh01.png"
                  alt="현미경 일러스트"
                />{" "}
                연구현황
                <br />
              </p>
              <p className="f30 fw700 grayn3 f_pp italic lh160 mt10">Food Safety Research Institute Oranization Info</p>
            </div>
          </div>
        </div>
        <div className="mt100 ">
          <div className="row ">
            <div className="col-lg-12">
              {/* <!-- 소스코드 --> */}
              <div className="main-visual">
                {/* <!-- 배경 --> */}
                <div
                  className="main-bg active"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2023.jpg')" }}
                  data-year="2023"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2022.jpg')" }}
                  data-year="2022"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2021.jpg')" }}
                  data-year="2021"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2020.jpg')" }}
                  data-year="2020"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2019.jpg')" }}
                  data-year="2019"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2018.jpg')" }}
                  data-year="2018"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2017.jpg')" }}
                  data-year="2017"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2016.jpg')" }}
                  data-year="2016"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2015.jpg')" }}
                  data-year="2015"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2014.jpg')" }}
                  data-year="2014"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2013.jpg')" }}
                  data-year="2013"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2012.jpg')" }}
                  data-year="2012"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2011.jpg')" }}
                  data-year="2011"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2010.jpg')" }}
                  data-year="2010"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('common/imgs/business/bg2009.jpg')" }}
                  data-year="2009"></div>

                {/* <!-- 텍스트 --> */}
                <div className="main-text" id="mainText">
                  <h1>2023</h1>
                  <ul>
                    <li>
                      <dl>
                        <dd>12월</dd>
                        <dd>베트남 수출용 "칼슘 호두와 아몬드" 출시</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>7월</dd>
                        <dd>아워홈 "Oh! 우리집 식혜" 출시</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>6월</dd>
                        <dd>청정원 "비타 딸기우유" 출시</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>5월</dd>
                        <dd>청정원 "멋있어 망고C" 출시</dd>
                      </dl>
                    </li>
                  </ul>
                </div>

                {/* <!-- 썸네일 --> */}
                <div className="timeline-wrap">
                  <div className="swiper thumbs-swiper">
                    <div className="swiper-wrapper">
                      <div
                        className="swiper-slide"
                        data-year="2023"
                        data-bg="common/imgs/business/bg2023.jpg"
                        data-text='
								  <h1>2023</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>베트남 수출용 "칼슘 호두와 아몬드" 출시</dd></dl></li>
									<li><dl><dd>7월</dd><dd>아워홈 "Oh! 우리집 식혜" 출시</dd></dl></li>
									<li><dl><dd>6월</dd><dd>청정원 "비타 딸기우유" 출시</dd></dl></li>
									<li><dl><dd>5월</dd><dd>청정원 "멋있어 망고C" 출시</dd></dl></li>
								</ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2023.jpg')" }}></div>
                        <div className="year-label">2023</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2022"
                        data-bg="common/imgs/business/bg2022.jpg"
                        data-text='
								  <h1>2022</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>돌 코리아 "돌 후룻밀크 망고" 출시</dd></dl></li>
									<li><dl><dd>6월</dd><dd>베트남 수출용 "강두유 아몬드와 호두" 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>돌 코리아 "VF37 생기발랄" 출시</dd></dl></li>
									<li><dl><dd>2월</dd><dd>파워풀엑스 "프쌤 바나나맛" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2022.jpg')" }}></div>
                        <div className="year-label">2022</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2021"
                        data-bg="common/imgs/business/bg2021.jpg"
                        data-text='
								  <h1>2021</h1>
								  <ul>
									<li><dl><dd>11월</dd><dd>데이웰니스 "데이프로틴 커피" 출시</dd></dl></li>
									<li><dl><dd>10월</dd><dd>미트리 "파워프로틴 초코맛" 출시</dd></dl></li>
									<li><dl><dd>4월</dd><dd>지니어트 "닥터바리스타 버터커피" 출시</dd></dl></li>
									<li><dl><dd>1월</dd><dd>재키하우스 "S-아르만씨" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2021.jpg')" }}></div>
                        <div className="year-label">2021</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2020"
                        data-bg="common/imgs/business/bg2020.jpg"
                        data-text='
								  <h1>2020</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>자연과사람들이 만든 과채음료 3종 출시(포도, 감귤, 사과)</dd></dl></li>
									<li><dl><dd>10월</dd><dd>위메프 "리릿 갈아만든 검은콩두유" 출시</dd></dl></li>
									<li><dl><dd>9월</dd><dd>코스네이처 "안고파 오리지널" 출시</dd></dl></li>
									<li><dl><dd>5월</dd><dd>베트남 수출용 "활력 왕삼" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2020.jpg')" }}></div>
                        <div className="year-label">2020</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2019"
                        data-bg="common/imgs/business/bg2019.jpg"
                        data-text='
								  <h1>2019</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>꽃피는 아침마을 "꽃마두유" 출시</dd></dl></li>
									<li><dl><dd>9월</dd><dd>아워홈 웰컴프룻 파인애플, 웰컴프룻 사과야채, 웰컴프룻 제주감귤, 웰컴프룻 포도 출시</dd></dl></li>
									<li><dl><dd>2월</dd><dd>CJ프레시웨이 "인절미향 소이라떼" 출시<br/>대상 "프룻프룻 샐러드주스" 출시</dd></dl></li>
									<li><dl><dd>1월</dd><dd>농협무역 "웰하임 검은콩,호두,아몬드가 들어간 건강한두유" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2019.jpg')" }}></div>
                        <div className="year-label">2019</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2018"
                        data-bg="common/imgs/business/bg2018.jpg"
                        data-text='
								  <h1>2018</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>퍼플빈 "PETSOMIL(미국수출용)" 출시</dd></dl></li>
									<li><dl><dd>11월</dd><dd>골드엠컴퍼니 "골든두유 검은콩호두와아몬드" 출시</dd></dl></li>
									<li><dl><dd>10월</dd><dd>아시아공정무역네트워크 "캐슈두유" 출시</dd></dl></li>
									<li><dl><dd>9월</dd><dd>한살림 "당근토마토" 출시<br/>네이처스토어 "포도쏘옥" 출시</dd></dl></li>

									<li><dl><dd>7월</dd><dd>퍼네이처스토어 "사과쏘옥" 출시<br/>퍼플빈 "퍼플빈 두유 1(반출)" 출시</dd></dl></li>
									<li><dl><dd>4월</dd><dd>리비아 수출용 "Rally red grape" 출시<br/>리비아 수출용 "Rally pineapple" 출시<br/>리비아 수출용 "Rally orange" 출시</dd></dl></li>





									<li><dl><dd>3월</dd><dd>떡보의 하루 "밥알이 들어있는 식혜" 출시</dd></dl></li>
									<li><dl><dd>2월</dd><dd>대상 "최고야 포도씨C" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2018.jpg')" }}></div>
                        <div className="year-label">2018</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2017"
                        data-bg="common/imgs/business/bg2017.jpg"
                        data-text='
								  <h1>2017</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>승광무역 베트남 수출용 "sooha 마카다미아 두유" 출시</dd></dl></li>
									<li><dl><dd>8월</dd><dd>드림코퍼레이션 베트남 수출용 "검은콩 호두아몬드 두유" 출시</dd></dl></li>
									<li><dl><dd>7월</dd><dd>드림코퍼레이션 베트남 수출용 "호두아몬드 검은콩 두유" 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>좋은 F&B 베트남 수출용 "좋은 호두 아몬드 두유" 출시</dd></dl></li>
									<li><dl><dd>2월</dd><dd>대상 비타 초코 우유 출시</dd></dl></li>




								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2017.jpg')" }}></div>
                        <div className="year-label">2017</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2016"
                        data-bg="common/imgs/business/bg2016.jpg"
                        data-text='
								  <h1>2016</h1>
								  <ul>
									<li><dl><dd>8월</dd><dd>CJ 프레시웨이 "멜론 소이라떼" 출시, 이마트 "건강한레드", "건강한 퍼플" 출시</dd></dl></li>
									<li><dl><dd>7월</dd><dd>광동제약 미국 수출용 두유 3종 "내추럴 소이빈밀크 바나나",<br/>"내추럴 소이빈밀크 스트로우베리", 내추럴 소이빈밀크 아몬드" 출시</dd></dl></li>
									<li><dl><dd>5월</dd><dd>이마트 노브랜드 "식혜" 출시</dd></dl></li>
									<li><dl><dd>4월</dd><dd>수연코퍼레이션 "황교익 약콩두유" 출시 , 돌코리아 "돌 바나나" 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>이마트 과채음료 4종 "엄마의 정성을 담은 오렌지", "엄마의 정성을 담은 포도",<br/>"엄마의 정성을 담은 사과", "엄마의 정성을 담은 망고" 출시</dd></dl></li>
									<li><dl><dd>1월</dd><dd>CJ 프레시웨이 "상큼한사과", "제주감귤", "바나나 소이라떼" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2016.jpg')" }}></div>
                        <div className="year-label">2016</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2015"
                        data-bg="common/imgs/business/bg2015.jpg"
                        data-text='
								  <h1>2015</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>이마트 노브랜드 "두유" 출시</dl></li>
									<li><dl><dd>11월</dd><dd>이마트 노브랜드 "검은콩두유" 출시</dd></dl></li>
									<li><dl><dd>9월</dd><dd>롯데마트 "초이스엘 인삼두유", "초이스엘 식이섬유 두유" 2종 출시</dd></dl></li>
									<li><dl><dd>8월</dd><dd>CJ 프레시웨이 "스트로우베리 소이라떼", "초콜릿 소이라떼" 2종 출시</dd></dl></li>
									<li><dl><dd>7월</dd><dd>대상 "고마워 사과씨C", "고마워 감귤씨C" 2종 출시</dd></dl></li>
									<li><dl><dd>6월</dd><dd>CJ 프레시웨이 "이츠웰 식혜" 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>이마트 PB 두유 5종 출시, 이마트 "콩가득두유", "콩가득 검은콩두유",<br/>
"맛있게 든든한 고칼슘 검은콩두유", "맛있게 든든한 고칼슘두유",<br/>
"맛있게 든든한 고칼슘 아몬드두유"</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2015.jpg')" }}></div>
                        <div className="year-label">2015</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2014"
                        data-bg="common/imgs/business/bg2014.jpg"
                        data-text='
								  <h1>2014</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>코리아세븐 "로얄밀크티" 출시</dd></dl></li>
									<li><dl><dd>8월</dd><dd>코리아세븐 과육함유 "자연과사람들 복숭아", "자연과사람들 망고" 2종 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>Hyon Foods "현소이밀크" 나이지리아 첫 수출</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2014.jpg')" }}></div>
                        <div className="year-label">2014</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2013"
                        data-bg="common/imgs/business/bg2013.jpg"
                        data-text='
								  <h1>2013</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>"검은콩, 검은깨 및 두유를 포함하는 비유지방 아이스크림의 제조방법"에 관한 특허(제10-1272799)</dd></dl></li>
									<li><dl><dd>8월</dd><dd>(유)돌코리아 "돌망고" 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>ICOOP 생협 "포도 한모금" 출시</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2013.jpg')" }}></div>
                        <div className="year-label">2013</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2012"
                        data-bg="common/imgs/business/bg2012.jpg"
                        data-text='
								  <h1>2012</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>풀무원 푸드머스 "6가지 비타민 두유", "고칼슘 검은콩두유" 2종 출시<br/>식품안전연구소 명칭변경</dd></dl></li>
									<li><dl><dd>9월</dd><dd>코리아세븐 "산뜻한 커피 마일드" 출시<br/>밥알 없는 전통식혜의 제조방법 특허출원</dd></dl></li>
									<li><dl><dd>7월</dd><dd>ICOOP 생협 "유기전통식혜" 출시</dd></dl></li>
									<li><dl><dd>6월</dd><dd>ICOOP 생협 "사과 한모금" 출시</dd></dl></li>
									<li><dl><dd>5월</dd><dd>롯데마트 "초이스엘 오렌지 100%", "초이스엘 포도 100%", "초이스엘 제주감귤%" 3종 출시</dd></dl></li>
									<li><dl><dd>3월</dd><dd>프리미엄 냉장 과채음료 "자연과사람들 블루베리", "자연과사람들 스트로우베리" 2종 출시</dd></dl></li>
								 </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2012.jpg')" }}></div>
                        <div className="year-label">2012</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2011"
                        data-bg="common/imgs/business/bg2011.jpg"
                        data-text='
								  <h1>2011</h1>
								  <ul>
									<li><dl><dd>12월</dd><dd>어린이용 냉장주스 "자연과사람들이 만든 블루베리", "자연과사람들이 만든 스트로우베리" 2종</dd></dl></li>
									<li><dl><dd>11월</dd><dd>롯데마트 "초이스엘 비타민&칼슘두유" 출시</dd></dl></li>
									<li><dl><dd>9월</dd><dd>주식회사 비락 "비락 밥알없이 깔끔한 전통 냉장 식혜" 출시<br/>홈플러스 "좋은상품 망고" 출시</dd></dl></li>
									<li><dl><dd>5월</dd><dd>건국유업 "건국야채밸런스"출시</dd></dl></li>
									<li><dl><dd>1월</dd><dd>롯데마트 "와이즐렉 내몸사랑 여주쌀을 담은 쌀두유" 출시<br/>ICOOP 생협 "마시는 초콜릿" 출시</dd></dl></li>
								</ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2011.jpg')" }}></div>
                        <div className="year-label">2011</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2010"
                        data-bg="common/imgs/business/bg2010.jpg"
                        data-text='
								  <h1>2010</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>소프트 아이스크림 믹스 "자연과사람들 소프트믹스밤맛" 출시</dd></dl></li>
									<li><dl><dd>7월</dd><dd>롯데마트 "와이즐렉 오렌지드링크", 와이즐렉 포도드링크" 2종 출시</dd></dl></li>
									<li><dl><dd>6월</dd><dd>홈플러스 "좋은상품 상쾌한아침 오렌지 100%", "좋은상품 상쾌한아침 포도 100%",<br/>
									"좋은상품 상쾌한아침 제주감귤" 3종 출시<br/>
									</dd></dl></li>
									<li><dl><dd>5월</dd><dd>롯데마트 "와이즐렉 달콤한두유" 출시</dd></dl></li>
								</ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('common/imgs/business/bg2010.jpg')" }}></div>
                        <div className="year-label">2010</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2009"
                        data-bg="common/imgs/business/bg2009.jpg"
                        data-text='
								  <h1>2009</h1>
								  <ul>
									<li><dl><dd>10월</dd><dd>파리크라상 "파리바게뜨 핫&아이스 카카오" 출시</dd></dl></li>
									<li><dl><dd>10월</dd><dd>롯데마트 "와이즐렉 검은콩 고칼슘두유" 출시</dd></dl></li>
									<li><dl><dd>1월</dd><dd>제품개발 업무 출발</dd></dl></li>

								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2008.jpg')" }}></div>
                        <div className="year-label">2009</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
