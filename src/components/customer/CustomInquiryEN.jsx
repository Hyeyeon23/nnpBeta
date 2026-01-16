import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { postBizConsulting } from "../../api/client";
const CustomInquiry = () => {
  const [isMore, setIsMore] = useState(false); // 더 보기 버튼 토글 기능

  const [type, setType] = useState(""); // 상담 유형
  const [container, setContainer] = useState(""); // 용기 유형
  const [quantity, setQuantity] = useState(""); // 수량 밴드
  const [hasRecipe, setHasRecipe] = useState(""); // 레시피 유무
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: { content: "", comp: "", phone: "", email: "" },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const quantityTrimed = quantity.replace('<span class="f14">*MOQ</span>', "").trim();
    console.log(quantityTrimed);

    setValue("type", type);
    setValue("container", container);
    setValue("quantity", quantityTrimed);
    setValue("hasRecipe", hasRecipe);

    // 최신 데이터 다시 가져오기
    const finalData = getValues();
    console.log("<onSubmit> latestData =", finalData);
    const resp = await postBizConsulting(finalData);

    if (resp.msg == "Success") {
      alert("문의가 접수되었습니다.");
      reset();
      setType("");
      setContainer("");
      setQuantity("");
      setHasRecipe("");
      setLoading(false);
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
    a: [`200,000 + <span class="f14">*MOQ</span>`, `500,000 +`, `1,000,000 +`],
    b: [`10만개 이상`, `10만개 이상`, `30만개 이상`],
    c: [`50,000 + <span class="f14">*MOQ</span>`, `100,000 +`, `300,000 +`, `500,000 +`],
    d: [`150,000 + <span class="f14">*MOQ</span>`, `300,000 +`, `500,000 +`, `1,000,000 +`],
    f: [`500,000 + <span class="f14">*MOQ</span>`, `700,000 +`, `1,000,000 +`, `1,500,000 +`],
    g: [`200,000 + <span class="f14">*MOQ</span>`, `500,000 +`, `700,000 +`, `1,000,000 +`],
    h: [`450,000 + <span class="f14">*MOQ</span>`, `700,000 +`, `1,000,000 +`, `1,500,000 +`],
    i: [`330,000 + <span class="f14">*MOQ</span>`, `500,000 +`, `700,000 +`, `1,000,000 +`],
    j: [`240,000 + <span class="f14">*MOQ</span>`, `500,000 +`, `700,000 +`, `1,000,000 +`],
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
      name: "Export",
      value: "EXPORT",
    },
    {
      name: "Other",
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
    { value: "SIG200", display: '<span class="sig200"></span><br>SIG <br>200ml', iconClass: "iconBG02", dataType: "a" },
    {
      value: "SIG250",
      display: '<span class="sig250"></span><br>SIG <br>250ml',
      iconClass: "iconBG09",
      dataType: "a",
    },
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
    setIsMore(true);
  };
  return (
    <>
      <section className="contant1100 mt200">
        {" "}
        {/* 2025-09-26 가장아래로 위치이동 mt200 추가 */}
        <div className="row customproduct">
          {/* 2025-09-26 customproduct 추가 */}
          <div className="col-lg-8">
            <p className="f70 fw600 grayn1 lh120">Request a custom consultation</p>
            <p className="f70 fw600 grayn1 lh120 main_cs">
              <img className="" src="/common/imgs/common/main_cs.png" style={{ paddingBottom: "30px" }} /> now.
            </p>
            <p className="f80 fw900 grayn1 italic f_pp lh100">Custom product.</p>
          </div>
          <div className="col-lg-4">
            <p class="f22 fw400 grayn1 lh170 mt100">
              No more complicated inquiries!
              <br class="wView" />
              Simply select the conditions you want, and our specialists will review them and provide personalized
              guidance.
            </p>
          </div>
        </div>
      </section>
      <section className="contant1100 pb100 csBox mb100 mt100">
        <div className="section">
          <p className="f22 fw400">Consultation Type</p>
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
              This field is required. Please select an option.
            </p>
          )}
        </div>

        <div className="section">
          <p className="f22 fw400 mt50">Container Type</p>
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
              This field is required. Please select an option.
            </p>
          )}
        </div>

        <div id="moreSection" className={`${isMore === false ? "hidden" : ""}`}>
          <div className="section">
            <p className="f22 fw400 mt50">MOQ (Minimum Order Quantity)</p>
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
                This field is required. Please select an option.{" "}
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">Recipe Provided:</p>
            <input {...register("hasRecipe", { required: true })} type="hidden" />
            <div className="radio-group mt20" id="recipe">
              <div
                data-group="recipe"
                className={`radio-button green ${hasRecipe === "true" ? "active" : ""}`}
                onClick={() => pickHiddenValue("hasRecipe", "true")}>
                YES
              </div>
              <div
                data-group="recipe"
                className={`radio-button green ${hasRecipe === "false" ? "active" : ""}`}
                onClick={() => pickHiddenValue("hasRecipe", "false")}>
                NO
              </div>
            </div>
            {errors.hasRecipe && (
              <p role="alert" className="ms-3 text-info text-sm">
                Please select whether a recipe is available.
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">Message</p>
            <textarea
              className="mt20 order_textarea"
              placeholder="Enter your inquiry"
              defaultValue=""
              {...register("content", {
                required: { value: true, message: "Please enter the details of your inquiry." },
                minLength: { value: 10, message: "The content must be at least 10 characters long." },
                maxLength: { value: 300, message: "The content must be no more than 300 characters long." },
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
            <p className="f22 fw400 mt50">Company Name</p>
            <input
              className="mt20 order_input"
              type="text"
              style={{ width: "100%", padding: "8px" }}
              placeholder="e.g. ABC Corp. Sales Dept."
              {...register("comp", {
                required: "Company name is a required field.",
                maxLength: { value: 20, message: "Company name must be 20 characters or fewer." },
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
            <p className="f22 fw400 mt50">Contact Number</p>
            <input
              className="mt20 order_input"
              type="text"
              placeholder="e.g. +82-2-123-4567"
              {...register("phone", {
                required: "Contact number is a required field.",
                pattern: {
                  value: /^(?:\d{2,3}-?\d{3,4}-?\d{4})$/,
                  message: "Invalid phone number format. <Example> 010-1234-5678 or 02-1234-5678",
                },
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="ms-3 text-info text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="section">
            <p className="f22 fw400 mt50">Email Address</p>
            <input
              className="mt20 order_input"
              type="email"
              style={{ width: "100%", padding: "8px" }}
              placeholder="e.g. support@company.com"
              {...register("email", {
                required: "Please enter an email address.",
                pattern: {
                  value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
                  message: "Please check the email format.",
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
              close
            </button>{" "}
            &nbsp;&nbsp;
            <button
              type="submit"
              className="mt50 title-btn rr-btn btn-transparent form-btn"
              onClick={handleSubmit(onSubmit)}>
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
              {loading ? "Sending..." : "Send"}
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
      {/* 오버레이 스피너 */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "6700px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}>
          <div className="spinner-border text-white" role="status" />
        </div>
      )}
    </>
  );
};

export default CustomInquiry;
