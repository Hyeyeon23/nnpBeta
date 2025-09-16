/* 고객 사용 api */
import axiosInstance from "../utils/axios";

/**
 * 일반 문의글 등록 
 * @param {} body 
 * @returns 
 */
export const postInquiry = async (body) => {

    try {
        const response = await axiosInstance.post("/client/inquiry/post", body);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

/**
 * 메인 비즈니스 컨설팅 등록
 * @param {} body 
 * @returns 
 */
export const postBizConsulting = async (body) => {
    try {
        const response = await axiosInstance.post("/client/consulting/post", body);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}

