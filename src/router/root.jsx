import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

const Loading = <div>Loading..</div>;
const Sample = lazy(() => import("../pages/sample/sample")); // lazy는 해당 모듈이 필요할때만 동적으로 로드하는 기능, Main 컴포넌트를 초기 번들에 포함하지 않고, 사용자가 해당 페이지에 접근할 때 비동기적으로 로드됨, 초기 로딩 속도를 줄이고 성능 최적화 효과가 있음
const root = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={Loading}>
          <Main></Main>
        </Suspense>
      ),
      //<Suspense>는 **로딩 중일 때 표시할 UI (fallback 속성)**를 지정하는 역할을 함.
    },
    {
      path: "/sample",
      element: (
        <Suspense fallback={Loading}>
          <Sample></Sample>
        </Suspense>
      ),
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // 깃허브 페이지스를 위한 설정
  }
);

export default root;
