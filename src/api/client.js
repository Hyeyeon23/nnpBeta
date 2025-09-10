/* 고객 사용 api */
import axiosInstance from "../utils/axios";

export const postInquiry = async (body) => {

    try {
        const response = await axiosInstance.post("/client/inquiry/post", body);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const postBizConsulting = async (body) => {
    try {
        const response = await axiosInstance.post("/client/consulting/post", body);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}

