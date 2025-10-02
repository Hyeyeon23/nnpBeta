import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { postBizConsulting } from "../../api/client";
const CustomInquiry = () => {
  const [isMore, setIsMore] = useState(false); // 더 보기 버튼 토글 기능

  const [type, setType] = useState(""); // 상담 유형
  const [container, setContainer] = useState(""); // 용기 유형
  const [quantity, setQuantity] = useState(""); // 수량 밴드
  const [hasRecipe, setHasRecipe] = useState(""); // 레시피 유무
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    defaultValues: { content: "", comp: "", phone: "", email: "" },
  });

  const onSubmit = async (data) => {
    setValue("type", type);
    setValue("container", container);
    setValue("quantity", quantity);
    setValue("hasRecipe", hasRecipe);

    console.log("<onSubmit> data = ", data);
    const resp = await postBizConsulting(data);

    if (resp.msg == "Success") {
      alert("문의가 접수되었습니다.");
      reset();
      setType("");
      setContainer("");
      setQuantity("");
      setHasRecipe("");
    }
  };

  const pickHiddenValue = (name, element) => {
    switch (name) {
      case "type":
        setType(element);
        break;
      case "quantity":
        setQuantity(element);
        break;
      case "hasRecipe":
        setHasRecipe(element);
        break;
      default:
    }
    setValue(name, element);
  };

  // quantity 선택지 렌더링 위한 state
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
  // 상담유형종류
  const types = [
    {
      name: "OEM",
      value: "OEM",
    },
    {
      name: "ODM",
      value: "ODM",
    },
    {
      name: "수출 문의",
      value: "EXPORT",
    },
    {
      name: "기타",
      value: "ETC",
    },
  ];
  // 용기 종류
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

  /* 컨테이너 선택 시  */
  const pickContainer = (container, quantityType) => {
    console.log(container, quantityType);
    setValue("container", container);
    setContainer(container);
    setQuantityType(quantityType);
  };
  return (
    <>
      <section className="contant1100 mt200">
        {" "}
        {/* 2025-09-26 가장아래로 위치이동 mt200 추가 */}
        <div className="row customproduct">
          {/* 2025-09-26 customproduct 추가 */}
          <div className="col-lg-8">
            <p className="f70 fw600 grayn1 lh120">맞춤 상담</p>
            <p className="f70 fw600 grayn1 lh120 main_cs">
              <img src="/common/imgs/common/main_cs.png" style={{ paddingBottom: "30px" }} /> 요청해보세요
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
          <input {...register("type", { required: true })} type="hidden" />
          <div className="radio-group mt20">
            {types.map((element) => (
              <div
                key={element.value}
                className={`radio-button oembutton ${type === element.value ? "active" : ""}`}
                onClick={() => pickHiddenValue("type", element.value)}>
                {element.name}
              </div>
            ))}
          </div>
          {errors.type && (
            <p role="alert" className="ms-3 text-info text-sm">
              필수 항목입니다. 선택해주세요.
            </p>
          )}
        </div>

        <div className="section">
          <p className="f22 fw400 mt50">용기 유형</p>
          <input {...register("container", { required: true })} type="hidden" />
          <div className="radio-group mt20" id="containerType">
            {containers.map((element) => (
              <div
                data-group="containerType"
                data-type={element.dataType}
                onClick={() => pickContainer(element.value, element.dataType)}
                key={element.value}
                className={`radio-button green ${element.iconClass}  ${container === element.value ? "active" : ""}`}
                dangerouslySetInnerHTML={{ __html: element.display }}></div>
            ))}
          </div>
          {errors.container && (
            <p role="alert" className="ms-3 text-info text-sm">
              필수 항목입니다. 선택해주세요.
            </p>
          )}
        </div>

        <div id="moreSection" className={`${isMore === false ? "hidden" : ""}`}>
          <div className="section">
            <p className="f22 fw400 mt50">발주량</p>
            <input {...register("quantity", { required: true })} type="hidden" />
            <div className="radio-group mt20" id="moq">
              {quantityTypes[quantityType]?.map((item, idx) => (
                <div
                  key={idx}
                  className={`radio-button ${quantity === item ? "active" : ""}`}
                  data-group="moq"
                  data-type={quantityType}
                  onClick={() => pickHiddenValue("quantity", item)}>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            {errors.quantity && (
              <p role="alert" className="ms-3 text-info text-sm">
                필수 항목입니다. 선택해주세요.
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">레시피</p>
            <input {...register("hasRecipe", { required: true })} type="hidden" />
            <div className="radio-group mt20" id="recipe">
              <div
                data-group="recipe"
                className={`radio-button green ${hasRecipe === "true" ? "active" : ""}`}
                onClick={() => pickHiddenValue("hasRecipe", "true")}>
                있음
              </div>
              <div
                data-group="recipe"
                className={`radio-button green ${hasRecipe === "false" ? "active" : ""}`}
                onClick={() => pickHiddenValue("hasRecipe", "false")}>
                없음
              </div>
            </div>
            {errors.hasRecipe && (
              <p role="alert" className="ms-3 text-info text-sm">
                레시피 유무를 선택해주세요.
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">상담 내용</p>
            <textarea
              className="mt20 order_textarea"
              placeholder="문의사항에 대한 내용을 작성해 주세요."
              defaultValue=""
              {...register("content", {
                required: { value: true, message: "문의사항에 대한 내용을 작성해주세요." },
                minLength: { value: 10, message: "내용은 10자 이상 입력해주세요" },
                maxLength: { value: 300, message: "내용은 300자 이하로 입력해주세요." },
              })}
              aria-invalid={errors.content ? "true" : "false"}
            />
            {errors.content && (
              <p role="alert" className="ms-3 text-info text-sm">
                {errors.content.message}
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">업체명</p>
            <input
              className="mt20 order_input"
              type="text"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. (주)자연과사람들 영업부"
              {...register("comp", {
                required: "  업체명은 필수 입력 항목입니다.",
                maxLength: { value: 20, message: "업체명은 20자 이하로 입력해주세요." },
              })}
              aria-invalid={errors.comp ? "true" : "false"}
            />
            {errors.comp && (
              <p role="alert" className="ms-3 text-info text-sm">
                {errors.comp.message}
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">연락처</p>
            <input
              className="mt20 order_input"
              type="text"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. 02-123-4567"
              {...register("phone", { required: "연락처를 필수 입력 항목입니다. ", pattern: "" })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="ms-3 text-info text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">이메일</p>
            <input
              className="mt20 order_input"
              type="email"
              style={{ width: "100%", padding: "8px" }}
              placeholder="ex. support@innp.co.kr"
              {...register("email", {
                required: "이메일 주소를 입력해주세요",
                pattern: {
                  value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
                  message: "이메일 형식을 체크해주세요.",
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="ms-3 text-info text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* <!-- 2025-10-02 클래스 추가 mt50 title-btn rr-btn btn-transparent form-btn -->  */}
          <center className={`${isMore === false ? "hidden" : ""}`}>
            <button
              type="button"
              className="mt50 title-btn rr-btn btn-transparent form-btn"
              onClick={() => setIsMore(!isMore)}>
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
              닫기
            </button>{" "}
            &nbsp;&nbsp;
            <button
              type="submit"
              className="mt50 title-btn rr-btn btn-transparent form-btn"
              onClick={handleSubmit(onSubmit)}>
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
              보내기
            </button>
          </center>
          {/* <!-- 2025-10-02 클래스 추가 mt50 title-btn rr-btn btn-transparent form-btn -->  */}
        </div>

        <center className={`${isMore === true ? "hidden" : ""}`}>
          <button type="button" className="mt50" onClick={() => setIsMore(!isMore)}>
            <span className="baseBtn">More</span>
          </button>
        </center>
      </section>
    </>
  );
};

export default CustomInquiry;
