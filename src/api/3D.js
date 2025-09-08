import axiosInstance from "../utils/axios";


export const imageTransfer = async (image) => {

    try {
        const formData = new FormData();

        formData.append("image", image); // 서버 @RequestParam("image")와 키 이름 일치        
        const response = await axiosInstance.post("/upload/img/sample", formData, {
        });
        console.log("업로드 성공:", response.data.msg);
        console.log("이미지경로:", response.data.data);

        return import.meta.env.VITE_API_URL + "/" + response.data.data;
    } catch (error) {
        console.error("업로드 실패:", error);
        if (error.response && error.response.status === 403) {
            alert("SNS 인증 후 사진을 업로드 해주세요.");
            return;
        }
        alert("서버 사진 업로드에 실패하였습니다.")
    }
}