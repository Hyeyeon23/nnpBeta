import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // 모든 요소 그려진 다음에 적용해야 적용됨
    const script = document.createElement("script");
    script.src = "/common/js/main.js";
    script.async = false; // 필요하면 false로 바꿔서 순서 보장
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {" "}
      <RouterProvider router={root}></RouterProvider>
    </>
  );
}

export default App;
