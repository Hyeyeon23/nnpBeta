import React from "react";

const CustomInquiry = () => {
  return (
    <>
      <section className="contant1100">
        <div className="row">
          <div className="col-lg-8">
            <p className="f70 fw600 grayn1 lh120">맞춤 상담</p>
            <p className="f70 fw600 grayn1 lh120 main_cs">
              <img className="" src="common/imgs/common/main_cs.png" style={{ paddingBottom: "30px" }} /> 요청해보세요
            </p>
            <p className="f80 fw900 grayn1 italic f_pp lh100">Custom product.</p>
          </div>
          <div className="col-lg-4">
            <p className="f22 fw400 grayn1 lh170 mt100">
              복잡한 상담은 이제 그만!
              <br />
              원하시는 조건을 선택해주시면
              <br />
              담당자가 직접 확인 후<br />
              맞춤 상담을 도와드립니다.
            </p>
          </div>
        </div>
      </section>
      <section className="contant1100 pb100 csBox mb100 mt100">
        <div className="section">
          <p className="f22 fw400">상담 유형</p>
          <div className="radio-group mt20">
            <div className="radio-button oembutton">OEM</div>
            <div className="radio-button oembutton">ODM</div>
            <div className="radio-button oembutton">수출 문의</div>
            <div className="radio-button oembutton">기타</div>
          </div>
        </div>

        <div className="section">
          <p className="f22 fw400 mt50">용기 유형</p>
          <div className="radio-group mt20">
            <div className="radio-button green iconBG09">
              <span className="sig120"></span>
              <br />
              SIG
              <br />
              120ml
            </div>
            <div className="radio-button green iconBG10">
              <span className="sig150"></span>
              <br />
              SIG
              <br />
              150ml
            </div>
            <div className="radio-button green">
              <span className="tetra200"></span>
              <br />
              Tetra Pak
              <br />
              200ml
            </div>
            <div className="radio-button green iconBG02">
              <span className="sig200"></span>
              <br />
              SIG
              <br />
              200ml
            </div>
            <div className="radio-button green iconBG03">
              <span className="tetra1000"></span>
              <br />
              Tetra Pak
              <br />
              1000ml
            </div>
            <div className="radio-button green iconBG04">
              <span className="tetra200Com"></span>
              <br />
              Tetra Pak 200ml
              <br />
              Compack Flex
            </div>
            <div className="radio-button green iconBG05">
              <span className="tetra250Com"></span>
              <br />
              Tetra Pak 250ml
              <br />
              Compack Flex
            </div>
            <div className="radio-button green iconBG06">
              <span className="can175"></span>
              <br />
              Can
              <br />
              175ml
            </div>
            <div className="radio-button green iconBG07">
              <span className="can200"></span>
              <br />
              Can
              <br />
              200ml
            </div>
            <div className="radio-button green iconBG07">
              <span className="can250"></span>
              <br />
              Can
              <br />
              250ml
            </div>
            <div className="radio-button green iconBG08">
              <span className="can238"></span>
              <br />
              Can
              <br />
              238ml
            </div>
            <div className="radio-button green iconBG08">
              <span className="can340"></span>
              <br />
              Can
              <br />
              340ml
            </div>
          </div>
        </div>

        <div id="moreSection">
          <div className="section">
            <p className="f22 fw400 mt50">발주량</p>
            <div className="radio-group mt20">
              <div className="radio-button">200,000 이상 *MOQ</div>
              <div className="radio-button">500,000 이상</div>
              <div className="radio-button">1,000,000 이상</div>
            </div>
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">레시피</p>
            <div className="radio-group mt20">
              <div className="radio-button green">있음</div>
              <div className="radio-button green">없음</div>
            </div>
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">상담 내용</p>
            <textarea className="mt20 order_textarea" placeholder="문의사항에 대한 내용을 작성해 주세요." />
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">업체명</p>
            <input
              className="mt20 order_input"
              type="text"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. (주)자연과사람들 영업부"
            />
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">연락처</p>
            <input
              className="mt20 order_input"
              type="text"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. 02-123-4567"
            />
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">이메일</p>
            <input
              className="mt20 order_input"
              type="email"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. support@innp.co.kr"
            />
          </div>

          <center>
            <button type="button" className="nnp-btn rr-btn mt50">
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
              닫기
            </button>{" "}
            &nbsp;&nbsp;
            <button type="submit" className="nnp-btn rr-btn mt50">
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
              보내기
            </button>
          </center>
        </div>

        <center>
          <button type="button" className="nnp-btn rr-btn mt50">
            <span>
              <i className="fa-regular fa-arrow-right"></i>
            </span>
            More
          </button>
        </center>
      </section>
    </>
  );
};

export default CustomInquiry;
