import axiosInstance from "../utils/axios";


export const imageTransfer = async (image) => {

    try {
        const formData = new FormData();

        formData.append("image", image); // 서버 @RequestParam("image")와 키 이름 일치

        const response = await axiosInstance.post("/upload/img/sample", formData, {

        });
        console.log("업로드 성공:", response.data);
    } catch (error) {
        console.error("업로드 실패:", error);
    }
}