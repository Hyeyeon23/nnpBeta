import React from "react";
import { useForm } from "react-hook-form";

import { postInquiry } from "../../api/client";
const CusoterInquirtMin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const resp = await postInquiry(data);

    if (resp.msg == "Success") {
      alert("문의가 접수되었습니다.");
      reset();
    }
  };

  return (
    <section className="contact-section__area contact-section section-space">
      <div className="container">
        <div className="row contant1160">
          <div className="col-md-12">
            <div className="contact-section__form__wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-section__form">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="contact-section__input">
                        <input
                          type="text"
                          placeholder="업체명"
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
                    </div>
                    <div className="col-sm-12">
                      <div className="contact-section__input">
                        <input
                          type="number"
                          placeholder="연락처"
                          {...register("phone", { required: "연락처를 필수 입력 항목입니다. ", pattern: "" })}
                          aria-invalid={errors.phone ? "true" : "false"}
                        />

                        {errors.phone && (
                          <p role="alert" className="ms-3 text-info text-sm">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="contact-section__input">
                        <input
                          type="email"
                          placeholder="이메일"
                          {...register("email", {
                            required: "Email Address is required",
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
                    </div>
                    <div className="col-sm-12">
                      <div className="contact-section__input">
                        <input
                          type="text"
                          placeholder="제목"
                          {...register("title", {
                            required: "제목을 입력해주세요.",
                            maxLength: { value: 20, message: "제목은 20자 이하로 입력해주세요." },
                          })}
                          aria-invalid={errors.title ? "true" : "false"}
                        />
                        {errors.title && (
                          <p role="alert" className="ms-3 text-info text-sm">
                            {errors.title.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <textarea
                        className="order_textarea"
                        placeholder="문의사항에 대한 내용을 작성해 주세요."
                        {...register("content", {
                          required: true,
                          minLength: { value: 10, message: "내용은 10자 이상 입력해주세요" },
                          maxLength: { value: 300, message: "내용은 300자 이하로 입력해주세요." },
                        })}
                        aria-invalid={errors.content ? "true" : "false"}></textarea>
                      {errors.content && (
                        <p role="alert" className="ms-3 text-info text-sm">
                          {errors.content.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="center">
                    <button type="submit" className="mt50 title-btn rr-btn btn-transparent form-btn">
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                      문의하기
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CusoterInquirtMin;
