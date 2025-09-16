import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { useEffect } from "react";

function App() {
  useEffect(() => {
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
