import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NNP from "../pages/nnp";
import Sample from "../pages/sample/Sample";
import Waiting from "../pages/waiting";
import SampleDev from "../pages/sample/SampleDev";
import Layout from "../components/common/Layout";
import ReceiveApiResponse from "../pages/util/ReceiveApiResponse";
import Faq from "../pages/cs/Faq";
import Contact from "../pages/cs/Contact";
import Ceo from "../pages/about/Ceo";
import CompanyLayout from "../components/layout/CompanyLayout";
import Vision from "../pages/about/vision";
import Road from "../pages/about/Road";
import History from "../pages/about/History";
import AboutLayout from "../components/layout/AboutLayout";
import Chung from "../pages/company/Chung";
import Osse from "../pages/company/Osse";
import Hyechun from "../pages/company/Hyechun";
import CertificationLayout from "../components/layout/CertificationLayout";
import Fssc from "../pages/certification/Fssc";
import Haccp from "../pages/certification/Haccp";
import Document from "../pages/certification/Document";
import Product from "../pages/business/product/Product";
import Sort from "../pages/business/product/Sort";
import Container from "../pages/business/Container";
import Wizus from "../pages/brand/Wizus";
import Healthy from "../pages/brand/Healthy";
import PB from "../pages/brand/PB";
import Personal from "../pages/Personal";
import Terms from "../pages/Terms";
import AuthPage from "../pages/AuthPage";
import BrandLayout from "../components/layout/BrandLayout";
import RecruitInfo from "../pages/recruit/RecruitInfo";

const Loading = <div>Loading..</div>;
// lazy는 해당 모듈이 필요할때만 동적으로 로드하는 기능, Main 컴포넌트를 초기 번들에 포함하지 않고, 사용자가 해당 페이지에 접근할 때 비동기적으로 로드됨, 초기 로딩 속도를 줄이고 성능 최적화 효과가 있음
//const sample = lazy(() => import("/pages/sample/sampleDev"));

const root = createBrowserRouter(
  [
    {
      path: "kr/Default.aspx", // /index.aspx 경로도 동일 컴포넌트 렌더링
      element: <NNP />,
    },
    {
      path: "/",
      element: (
        <Suspense fallback={Loading}>
          {/* <Main></Main> */}
          <NNP></NNP>
        </Suspense>
      ),
      //<Suspense>는 **로딩 중일 때 표시할 UI (fallback 속성)**를 지정하는 역할을 함.
    },
    {
      path: "/auth",
      element: (
        <Suspense fallback={Loading}>
          <AuthPage></AuthPage>
        </Suspense>
      ),
    },

    {
      path: "/receiveResult",
      element: (
        <Suspense fallback={Loading}>
          <ReceiveApiResponse></ReceiveApiResponse>
        </Suspense>
      ),
    },

    {
      path: "/dev",
      element: (
        <Suspense fallback={Loading}>
          <SampleDev></SampleDev>
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense fallback={Loading}>
          <AboutLayout></AboutLayout>
        </Suspense>
      ),
      children: [
        { path: "ceo", Component: Ceo },
        { path: "vision", Component: Vision },
        { path: "history", Component: History },
        { path: "road", Component: Road },
      ],
    },
    {
      path: "company",
      element: (
        <Suspense fallback={Loading}>
          <CompanyLayout></CompanyLayout>
        </Suspense>
      ),
      children: [
        { path: "chung", Component: Chung },
        { path: "osse", Component: Osse },
        { path: "hyechun", Component: Hyechun },
      ],
    },
    {
      path: "certification",
      Component: CertificationLayout,
      children: [
        { path: "fssc", Component: Fssc },
        { path: "haccp", Component: Haccp },
        { path: "document", Component: Document },
      ],
    },
    {
      path: "recruit",
      children: [{ path: "info", Component: RecruitInfo }],
    },
    {
      path: "business",
      children: [
        { path: "products", Component: Product },
        { path: "containers", Component: Container },
        {
          path: "product/:type",
          Component: Sort,
        },
      ],
    },
    {
      path: "brand",
      Component: BrandLayout,
      children: [
        { path: "wizus/:type", Component: Wizus },
        { path: "healthy/:type", Component: Healthy },
        { path: "pb", Component: PB },
      ],
    },
    {
      path: "cs",
      children: [
        {
          path: "contact",
          element: (
            <Suspense fallback={Loading}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <Suspense fallback={Loading}>
              <Faq />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: "/personal",
      element: (
        <Suspense fallback={Loading}>
          <Personal></Personal>
        </Suspense>
      ),
    },
    {
      path: "/terms",
      element: (
        <Suspense fallback={Loading}>
          <Terms></Terms>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={Loading}>
          <Waiting></Waiting>
        </Suspense>
      ),
    },
    /* 옛날 닷넷 주소 변환  */
    { path: "/kr/Company/Recruit.aspx", element: <Navigate to="/recruit/info" replace /> },

    { path: "/kr/Product/pd_Asepsis.aspx", element: <Navigate to="/business/containers" replace /> },
    { path: "/kr/Product/pd_Can.aspx", element: <Navigate to="/business/containers" replace /> },
    { path: "/kr/Company/Business.aspx", element: <Navigate to="/business/containers" replace /> },

    { path: "/kr/Company/Greeting.aspx", element: <Navigate to="/about/ceo" replace /> },
    { path: "/kr/Company/Info.aspx", element: <Navigate to="/about/ceo" replace /> },

    { path: "/Company/Info.aspx", element: <Navigate to="/about/ceo" replace /> },
    { path: "/kr/Company/Road.aspx", element: <Navigate to="/about/road" replace /> },
    { path: "/kr/Company/Vision.aspx", element: <Navigate to="/about/vision" replace /> },
    { path: "/kr/Company/Foodsafe.aspx", element: <Navigate to="/certification/haccp" replace /> },
    /* 임시로 */
    { path: "/kr/RnD/History.aspx", element: <Navigate to="/" replace /> },
    { path: "/kr/Product/Trade.aspx", element: <Navigate to="/" replace /> },
    { path: "/kr/Customer/Support.aspx", element: <Navigate to="/" replace /> },
  ],
  {
    basename: import.meta.env.BASE_URL, // 깃허브 페이지스를 위한 설정
  }
);

export default root;
