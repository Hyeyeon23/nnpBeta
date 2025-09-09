import React, { useState } from "react";

const CustomInquiry = () => {
  const [type, setType] = useState(""); // 현재 선택된 값
  const [container, setContainer] = useState("");
  const [quantity, setQuantity] = useState("");
  const [recipe, setRecipe] = useState("");
  const [quantityType, setQuantityType] = useState("a");
  const [quantityTypes, setQuantityTypes] = useState({
    a: [`200,000 이상 <span class="f14">*MOQ</span>`, `500,000 이상`, `1,000,000 이상`],
    b: [`10만개 이상`, `10만개 이상`, `30만개 이상`],
    c: [`50,000 이상 <span class="f14">*MOQ</span>`, `100,000 이상`, `300,000 이상`, `500,000 이상`],
    d: [`150,000 이상 <span class="f14">*MOQ</span>`, `300,000 이상`, `500,000 이상`, `1,000,000 이상`],
    f: [`500,000 이상 <span class="f14">*MOQ</span>`, `700,000 이상`, `1,000,000 이상`, `1,500,000 이상`],
    g: [`200,000 이상 <span class="f14">*MOQ</span>`, `500,000 이상`, `700,000 이상`, `1,000,000 이상`],
    h: [`450,000 이상 <span class="f14">*MOQ</span>`, `700,000 이상`, `1,000,000 이상`, `1,500,000 이상`],
    i: [`330,000 이상 <span class="f14">*MOQ</span>`, `500,000 이상`, `700,000 이상`, `1,000,000 이상`],
    j: [`240,000 이상 <span class="f14">*MOQ</span>`, `500,000 이상`, `700,000 이상`, `1,000,000 이상`],
  });

  const types = ["OEM", "ODM", "수출 문의", "기타"];
  const containers = [
    { value: "SIG120", display: '<span class="sig120"></span><br>SIG <br>120ml', iconClass: "iconBG09", dataType: "a" },
    { value: "SIG150", display: '<span class="sig150"></span><br>SIG <br>150ml', iconClass: "iconBG10", dataType: "a" },
    {
      value: "TETRA200",
      display: '<span class="tetra200"></span><br>Tetra Pak <br>200ml',
      iconClass: "",
      dataType: "a",
    },
    { value: "SIG200", display: '<span class="sig200"></span><br>SIG <br>200ml', iconClass: "iconBG02", dataType: "c" },
    {
      value: "TETRA1000",
      display: '<span class="tetra1000"></span><br>Tetra Pak <br>1000ml',
      iconClass: "iconBG03",
      dataType: "c",
    },
    {
      value: "TETRA_CF200",
      display: '<span class="tetra200Com"></span><br>Tetra Pak 200ml <br>Compack Flex',
      iconClass: "iconBG04",
      dataType: "d",
    },
    {
      value: "TETRA_CF250",
      display: '<span class="tetra250Com"></span><br>Tetra Pak 250ml <br>Compack Flex',
      iconClass: "iconBG05",
      dataType: "d",
    },
    { value: "CAN175", display: '<span class="can175"></span><br>Can <br>175ml', iconClass: "iconBG06", dataType: "f" },
    { value: "CAN200", display: '<span class="can200"></span><br>Can <br>200ml', iconClass: "iconBG07", dataType: "g" },
    { value: "CAN250", display: '<span class="can250"></span><br>Can <br>250ml', iconClass: "iconBG07", dataType: "h" },
    { value: "CAN238", display: '<span class="can238"></span><br>Can <br>238ml', iconClass: "iconBG08", dataType: "i" },
    { value: "CAN340", display: '<span class="can340"></span><br>Can <br>340ml', iconClass: "iconBG08", dataType: "j" },
  ];
  const quantities = [];

  const pickContainer = (container, quantityType) => {
    console.log(container, quantityType);
    setContainer(container);
    setQuantityType(quantityType);
  };
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
            {types.map((element) => (
              <div
                key={element}
                className={`radio-button oembutton ${type === element ? "active" : ""}`}
                onClick={() => setType(element)}>
                {element}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <p className="f22 fw400 mt50">용기 유형</p>
          <div className="radio-group mt20">
            {containers.map((element) => (
              <div
                data-type={element.dataType}
                onClick={() => pickContainer(element.value, element.dataType)}
                key={element.value}
                className={`radio-button green ${element.iconClass}  ${container === element.value ? "active" : ""}`}
                dangerouslySetInnerHTML={{ __html: element.display }}></div>
            ))}
          </div>
        </div>

        <div id="moreSection">
          <div className="section">
            <p className="f22 fw400 mt50">발주량</p>
            <div className="radio-group mt20" id="moq">
              {quantityTypes[quantityType]?.map((item, idx) => (
                <div
                  key={idx}
                  className={`radio-button ${quantity === item ? "active" : ""}`}
                  data-group="moq"
                  data-type={quantityType}
                  onClick={() => setQuantity(item)}>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">레시피</p>
            <div className="radio-group mt20">
              <div className={`radio-button green ${recipe === true ? "active" : ""}`} onClick={() => setRecipe(true)}>
                있음
              </div>
              <div
                className={`radio-button green ${recipe === false ? "active" : ""}`}
                onClick={() => setRecipe(false)}>
                없음
              </div>
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
