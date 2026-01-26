import { useEffect } from "react";
import MetaEN from "../../../components/common/MetaEN";
const ResearchEN = () => {
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
      <MetaEN
        title={"Nature & People R&D Research"}
        description={
          "Specialized in beverage OEM, ODM, Private Label, and B2B manufacturing, including exports. We expertly produce Aseptic Cartons, Gable Tops, and Cans."
        }></MetaEN>{" "}
      <style>{`
    .swiper-slide {
      width: 200px;
      height: 200px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 18px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      transition: all 0.4s cubic-bezier(0.25, 1, 0.3, 1);
      overflow: visible;
      will-change: transform;
      z-index: 1;
    }
  `}</style>
      <section>
        <div className="contant1160  mt100">
          <div className="row ">
            <div className="col-lg-12">
              <p className="f52 fw600 grayn1  lh160 rnd_ill">
                Research Activities of
                <br />
                <img
                  style={{ verticalAlign: "bottom" }}
                  src="/common/imgs/business/rsh01.png"
                  alt="현미경 일러스트"
                />{" "}
                the Food Safety Research Institute
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
                  style={{ backgroundImage: "url('/common/imgs/business/bg2018.jpg')" }}
                  data-year="2018"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2017.jpg')" }}
                  data-year="2017"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2016.jpg')" }}
                  data-year="2016"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2015.jpg')" }}
                  data-year="2015"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2014.jpg')" }}
                  data-year="2014"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2013.jpg')" }}
                  data-year="2013"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2012.jpg')" }}
                  data-year="2012"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2011.jpg')" }}
                  data-year="2011"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2010.jpg')" }}
                  data-year="2010"></div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url('/common/imgs/business/bg2009.jpg')" }}
                  data-year="2009"></div>

                {/* <!-- 텍스트 --> */}
                <div className="main-text" id="mainText">
                  <h1>2023</h1>
                  <ul>
                    <li>
                      <dl>
                        <dd>12</dd>
                        <dd>Launched “Calcium Walnut & Almond Drink” for export to Vietnam</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>7</dd>
                        <dd>Launched Ourhome “Oh! Our Home” Sikhye</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>6</dd>
                        <dd>Launched Chung Jung One “Vita Strawberry Milk”</dd>
                      </dl>
                    </li>
                    <li>
                      <dl>
                        <dd>5</dd>
                        <dd>Launched Chung Jung One “Cool Mango C</dd>
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
                        data-bg="/common/imgs/business/bg2023.jpg"
                        data-text="
                          <h1>2023</h1>
                          <ul>
                          <li><dl><dd>12</dd><dd>Launched “Calcium Walnut & Almond Drink” for export to Vietnam</dd></dl></li>
                          <li><dl><dd>7</dd><dd>Launched Ourhome “Oh! Our Home” Sikhye</dd></dl></li>
                          <li><dl><dd>6</dd><dd>Launched Chung Jung One “Vita Strawberry Milk”</dd></dl></li>
                          <li><dl><dd>5</dd><dd>Launched Chung Jung One “Cool Mango C</dd></dl></li>
                        </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2023.jpg')" }}></div>
                        <div className="year-label">2023</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2022"
                        data-bg="/common/imgs/business/bg2022.jpg"
                        data-text="
								  <h1>2022</h1>
								  <ul>
									<li><dl><dd>10</dd><dd>Launched Dole Korea “Dole Fruit Milk – Mango”</dd></dl></li>
									<li><dl><dd>6</dd><dd>Launched “Kang Soy Milk Almond & Walnut” for export to Vietnam</dd></dl></li>
									<li><dl><dd>3</dd><dd>Launched Dole Korea “VF37 Vitality Drink”</dd></dl></li>
									<li><dl><dd>2</dd><dd>Launched “PowerfulX PSSam Banana”</dd></dl></li>
								  </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2022.jpg')" }}></div>
                        <div className="year-label">2022</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2021"
                        data-bg="/common/imgs/business/bg2021.jpg"
                        data-text="
								  <h1>2021</h1>
								  <ul>
									<li><dl><dd>11</dd><dd>aunched “Day Wellness Day Protein Coffee”</dd></dl></li>
									<li><dl><dd>10</dd><dd>Launched Mitree “Power Protein – Chocolate”</dd></dl></li>
									<li><dl><dd>4</dd><dd>Launched Genieut “Dr. Barista Butter Coffee”</dd></dl></li>
									<li><dl><dd>1</dd><dd>Launched Jacky House “S-Arman C”</dd></dl></li>
								  </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2021.jpg')" }}></div>
                        <div className="year-label">2021</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2020"
                        data-bg="/common/imgs/business/bg2020.jpg"
                        data-text="
								  <h1>2020</h1>
								  <ul>
									<li><dl><dd>12</dd><dd>Launched Nature & People Mixed Fruit Drinks (Grape, Tangerine, Apple)</dd></dl></li>
									<li><dl><dd>10</dd><dd>Launched Wemakeprice “Ririt Black Soybean Drink”</dd></dl></li>
									<li><dl><dd>9</dd><dd>Launched CosNature “Angopa Original”</dd></dl></li>
									<li><dl><dd>5</dd><dd>Launched “Vitality Wangsam” for export to Vietnam</dd></dl></li>
								  </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2020.jpg')" }}></div>
                        <div className="year-label">2020</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2019"
                        data-bg="/common/imgs/business/bg2019.jpg"
                        data-text='
								  <h1>2019</h1>
								  <ul>
									<li><dl><dd>10</dd><dd>Launched "Morning Village Kkotma Soy Milk”</dd></dl></li>
									<li><dl><dd>9</dd><dd>Launched “Ourhome Welcome Fruit Pineapple”, “Welcome Fruit Apple & Vegetable”, “Welcome Fruit Jeju Tangerine”, and “Welcome Fruit Grape”.</dd></dl></li>
									<li><dl><dd>2</dd><dd>Launched CJ Freshway “Injeolmi-flavored Soy Latte”
Launched Daesang “Fruit Fruit Salad Juice”
</dd></dl></li>
									<li><dl><dd>1</dd><dd>Launched Nonghyup Trading “Wellheim Black Bean”, “Walnut & Almond Soy Milk”</dd></dl></li>
								  </ul>'>
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2019.jpg')" }}></div>
                        <div className="year-label">2019</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2018"
                        data-bg="/common/imgs/business/bg2018.jpg"
                        data-text="
                            <h1>2018</h1>
                              <ul>
                                <li><dl><dd>12</dd><dd>Launched Purplebean “PETSOMIL” (for export to the U.S.)</dd></dl></li>
                                <li><dl><dd>11</dd><dd>Launched “Gold M Company Golden Soy Milk – Black Bean, Walnut & Almond”</dd></dl></li>
                                <li><dl><dd>10</dd><dd>Launched Asia Fair Trade Network “Cashew Soy Milk”</dd></dl></li>
                                <li><dl><dd>9</dd><dd>Launched Hansalim “Carrot Tomato Juice” Launched Nature Store “Grape Sso-ok” </dd></dl></li>

                                <li><dl><dd>7</dd><dd>Launched Nature Store “Apple Sso-ok” Launched Purplebean “Purplebean Soy Milk 1” (export shipment)</dd></dl></li>
                                <li><dl><dd>4</dd><dd>Launched export beverages for Libya: <br>“Rally Red Grape”, <br>“Rally Pineapple”, <br>“Rally Orange”</dd></dl></li>
                                <li><dl><dd>3</dd><dd>Launched Tteokbo’s Day “Rice Grain Sikhye”</dd></dl></li>
                                <li><dl><dd>2</dd><dd>Launched Daesang “Choegoya Grape C”</dd></dl></li>
                              </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2018.jpg')" }}></div>
                        <div className="year-label">2018</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2017"
                        data-bg="/common/imgs/business/bg2017.jpg"
                        data-text="
                      <h1>2017</h1>
                      <ul>
													<li><dl><dd>10</dd><dd>Launched Seunggwang Trading “Sooha Macadamia Soy Milk” (Vietnam export)</dd></dl></li>
                          <li><dl><dd>8</dd><dd>Launched Dream Corporation “Black Bean Walnut Almond Soy Milk” (Vietnam export)</dd></dl></li>
                          <li><dl><dd>7</dd><dd>Launched Dream Corporation “Walnut Almond Black Bean Soy Milk” (Vietnam export)</dd></dl></li>
                          <li><dl><dd>3</dd><dd>Launched Good F&B “Good Walnut Almond Soy Milk” (Vietnam export)</dd></dl></li>
                          <li><dl><dd>2</dd><dd>Launched Daesang “Vita Choco Milk”</dd></dl></li>
								      </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2017.jpg')" }}></div>
                        <div className="year-label">2017</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2016"
                        data-bg="/common/imgs/business/bg2016.jpg"
                        data-text="
								  <h1>2016</h1>
								  <ul>
		<li><dl><dd>8</dd><dd>Launched CJ Freshway “Melon Soy Latte”, launched E-mart “Healthy Red” and “Healthy Purple” beverage lines</dd></dl></li>
									<li><dl><dd>7</dd><dd>Launched Kwangdong Pharmaceutical “Natural Soybean Milk Banana”,
“Strawberry”, and “Almond” (for U.S. export)
</dd></dl></li>
									<li><dl><dd>5</dd><dd>Launched E-mart “No Brand Sikhye”</dd></dl></li>
									<li><dl><dd>4</dd><dd>Launched Suyeon Corporation Hwang Gyo-ik Yak-kong Soy Milk,  launched Dole Korea Dole Banana Drink</dd></dl></li>
									<li><dl><dd>3</dd><dd>Launched E-mart Fruit & Vegetable Drink Series: “Orange Made with Mom’s Care”, “Grape Made with Mom’s Care”, “Apple Made with Mom’s Care”, “Mango Made with Mom’s Care.”</dd></dl></li>
									<li><dl><dd>1</dd><dd>Launched CJ Freshway “Fresh Apple”, “Jeju Tangerine”, and “Banana Soy Latte</dd></dl></li>
								  </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2016.jpg')" }}></div>
                        <div className="year-label">2016</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2015"
                        data-bg="/common/imgs/business/bg2015.jpg"
                        data-text="
                          <h1>2015</h1>
                          <ul>
                            <li><dl><dd>12</dd><dd>Launched E-mart “No Brand Soy Milk”</dl></li>
                            <li><dl><dd>11</dd><dd>Launched E-mart “No Brand Black Bean Soy Milk”</dd></dl></li>
                            <li><dl><dd>9</dd><dd>Launched Lotte Mart “Choice L Ginseng Soy Milk”, launched Lotte Mart “Choice L Dietary Fiber Soy Milk”</dd></dl></li>
                            <li><dl><dd>8</dd><dd>Launched CJ Freshway “Strawberry Soy Latte” and “Chocolate Soy Latte”</dd></dl></li>
                            <li><dl><dd>7</dd><dd>Launched Daesang “Thanks Apple C” and “Thanks Tangerine C”</dd></dl></li>
                            <li><dl><dd>6</dd><dd>Launched CJ Freshway “It’s Well Sikhye”</dd></dl></li>
                            <li><dl><dd>3</dd><dd>Launched Emart PB Soy Milk Series (5 items): “Kong-gadeuk Soy Milk”, “Kong-gadeuk Black Bean Soy Milk”, “Tasty & Nutritious High-Calcium Black Bean Soy Milk”, “Tasty & Nutritious High-Calcium Soy Milk”, “Tasty & Nutritious High-Calcium Almond Soy Milk”.</dd></dl></li>
                          </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2015.jpg')" }}></div>
                        <div className="year-label">2015</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2014"
                        data-bg="/common/imgs/business/bg2014.jpg"
                        data-text="
                          <h1>2014</h1>
                          <ul>
                            <li><dl><dd>12</dd><dd>Launched Korea Seven “Royal Milk Tea”</dd></dl></li>
                            <li><dl><dd>8</dd><dd>Launched Korea Seven fruit-containing beverages: Nature & People Peach, Nature & People Mango</dd></dl></li>
                            <li><dl><dd>3</dd><dd>Achieved first export of Hyon Foods “Hyon Soy Milk” to Nigeria</dd></dl></li>
                          </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2014.jpg')" }}></div>
                        <div className="year-label">2014</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2013"
                        data-bg="/common/imgs/business/bg2013.jpg"
                        data-text="
                            <h1>2013</h1>
                              <ul>
                              <li><dl><dd>12</dd><dd>Patent registered: Manufacturing Method for Non-Fat Ice Cream Containing Black Beans, Black Sesame, and Soy Milk
                              (Patent No. 10-1272799)
                              </dd></dl></li>
                              <li><dl><dd>8</dd><dd>Launched Dole Korea “Dole Mango”</dd></dl></li>
                              <li><dl><dd>3</dd><dd>Launched iCOOP Cooperative “One Sip of Grape”</dd></dl></li>
                              </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2013.jpg')" }}></div>
                        <div className="year-label">2013</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2012"
                        data-bg="/common/imgs/business/bg2012.jpg"
                        data-text="
                            <h1>2012</h1>
                            <ul>
                                <li><dl><dd>10</dd><dd>Launched Pulmuone Foodmerce: “6-Vitamin Soy Milk”, “High-Calcium Black Bean Soy Milk.” Renamed to Food Safety Research Institute</dd></dl></li>
                                <li><dl><dd>9</dd><dd>Launched Korea Seven “Mild Coffee” Patent filed: Manufacturing Method for Traditional Sikhye Without Rice Grains</dd></dl></li>
                                <li><dl><dd>7</dd><dd>Launched iCOOP Cooperative “Organic Traditional Sikhye”</dd></dl></li>
                                <li><dl><dd>6</dd><dd>Launched iCOOP Cooperative “One Sip of Apple”</dd></dl></li>
                                <li><dl><dd>5</dd><dd>Launched Lotte Mart “Choice L 100% Orange”, “100% Grape”, “Jeju Mandarin” (3 items)</dd></dl></li>
                                <li><dl><dd>3</dd><dd>Launched Premium Refrigerated Fruit & Vegetable Drinks: “Nature & People Blueberry”, “Nature & People Strawberry”</dd></dl></li>
                          </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2012.jpg')" }}></div>
                        <div className="year-label">2012</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2011"
                        data-bg="/common/imgs/business/bg2011.jpg"
                        data-text="
								  <h1>2011</h1>
								  <ul>
									<li><dl><dd>12</dd><dd>어Launched refrigerated children’s juices: “Nature & People Blueberry”, “Nature & People Strawberry”</dd></dl></li>
									<li><dl><dd>11</dd><dd>Launched Lotte Mart “Choice L Vitamin & Calcium Soy Milk”</dd></dl></li>
									<li><dl><dd>9</dd><dd>Launched Birak “Birak Clean Sikhye (No Rice Grain),” and Homeplus “Good Product Mango”</dd></dl></li>
									<li><dl><dd>5</dd><dd>Launched Konkuk “Dairy Konkuk Vegetable Balance”</dd></dl></li>
									<li><dl><dd>1</dd><dd>Launched Lotte Mart “Wiselect Yeju-Rice Soy Milk”, and iCOOP Cooperative “Drinking Chocolate”</dd></dl></li>
								</ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2011.jpg')" }}></div>
                        <div className="year-label">2011</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2010"
                        data-bg="/common/imgs/business/bg2010.jpg"
                        data-text="
                          <h1>2010</h1>
                          <ul>
                          <li><dl><dd>10월</dd><dd>Launched Nature & People “Soft Mix Chestnut Flavor” soft ice cream mix</dd></dl></li>
                          <li><dl><dd>7월</dd><dd>Launched Lotte Mart “Wiselect Orange Drink”, “Wiselect Grape Drink”</dd></dl></li>
                          <li><dl><dd>6월</dd><dd>Launched Homeplus “Good Product Fresh Morning Orange 100%”, “Good Product Fresh Morning Grape 100%,” “Good Product Fresh Morning Jeju Mandarin.”<br>
                          </dd></dl></li>
                          <li><dl><dd>5월</dd><dd>Launched Lotte Mart “Wiselect Sweet Soy Milk”</dd></dl></li>
                        </ul>">
                        <div
                          className="thumb-img"
                          style={{ backgroundImage: "url('/common/imgs/business/bg2010.jpg')" }}></div>
                        <div className="year-label">2010</div>
                      </div>

                      <div
                        className="swiper-slide"
                        data-year="2009"
                        data-bg="/common/imgs/business/bg2009.jpg"
                        data-text="
                          <h1>2009</h1>
                          <ul>
                            <li><dl><dd>10월</dd><dd>Launched Paris Croissant “Paris Baguette Hot & Ice Cocoa”</dd></dl></li>
                            <li><dl><dd>10월</dd><dd>Launched Lotte Mart “Wiselect Black Bean High-Calcium Soy Milk”</dd></dl></li>
                            <li><dl><dd>1월</dd><dd>Began official product development operations</dd></dl></li>

                          </ul>">
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

export default ResearchEN;
