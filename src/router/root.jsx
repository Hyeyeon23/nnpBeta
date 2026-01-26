import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NNP from "../pages/nnp";
import Sample from "../pages/sample/Sample";
import Waiting from "../pages/waiting";
import SampleDev from "../pages/sample/SampleDev";
import Layout from "../components/common/Layout";
import ReceiveApiResponse from "../pages/util/ReceiveApiResponse";
import Faq from "../pages/cs/Faq";
import FaqEN from "../en/pages/cs/Faq";
import Contact from "../pages/cs/Contact";
import ContactEN from "../en//pages/cs/Contact";
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
import ProductEN from "../en/pages/business/product/Product";
import Sort from "../pages/business/product/Sort";
import SortEN from "../en/pages/business/product/Sort";
import Container from "../pages/business/Container";
import ContainerEN from "../en/pages/business/Container";
import Wizus from "../pages/brand/Wizus";
import WizusEN from "../en/pages/brand/Wizus";
import Healthy from "../pages/brand/Healthy";
import HealthyEN from "../en/pages/brand/Healthy";
import PB from "../pages/brand/PB";
import PBEN from "../en/pages/brand/PB";
import Personal from "../pages/Personal";
import Terms from "../pages/Terms";
import AuthPage from "../pages/AuthPage";
import AuthPageEN from "../en/pages/AuthPage";
import BrandLayout from "../components/layout/BrandLayout";
import RecruitInfo from "../pages/recruit/RecruitInfo";
import RndLayout from "../components/layout/RndLayout";
import Info from "../pages/rnd/Info";
import InfoEN from "../en/pages/rnd/Info";

import Structure from "../pages/rnd/Structure";
import StructureEN from "../en/pages/rnd/Structure";
import Research from "../pages/rnd/Research";
import ResearchEN from "../en/pages/rnd/Research";
import Equipment from "../pages/rnd/Equipment";
import EquipmentEN from "../en/pages/rnd/Equipment";
import RecruitLayout from "../components/layout/RecruitLayout";
import PolicyInfo from "../pages/recruit/PolicyInfo";
import ProcessInfo from "../pages/recruit/ProcessInfo";
import BenefitInfo from "../pages/recruit/BenefitInfo";
import NNPEN from "../en/NNP";
import CeoEN from "../en/pages/about/Ceo";
import VisionEN from "../en/pages/about/Vision";
import HistoryEN from "../en/pages/about/History";
import RoadEN from "../en/pages/about/Road";
import ChungEN from "../en/pages/company/Chung";
import OsseEN from "../en/pages/company/Osse";
import HyechunEN from "../en/pages/company/Hyechun";
import FsscEN from "../en/pages/certification/Fssc";
import HaccpEN from "../en/pages/certification/Haccp";
import DocumentEN from "../en/pages/certification/Document";
import PolicyInfoEN from "../en/pages/recruit/PolicyInfo";
import ProcessInfoEN from "../en/pages/recruit/ProcessInfo";
import BenefitInfoEN from "../en/pages/recruit/BenefitInfo";
import Lang from "../components/common/Lang";

const Loading = <div>Loading..</div>;
// lazy는 해당 모듈이 필요할때만 동적으로 로드하는 기능, Main 컴포넌트를 초기 번들에 포함하지 않고, 사용자가 해당 페이지에 접근할 때 비동기적으로 로드됨, 초기 로딩 속도를 줄이고 성능 최적화 효과가 있음
//const sample = lazy(() => import("/pages/sample/sampleDev"));

export function createRouter(lang, setLang) {
  return createBrowserRouter(
    [
      {
        path: "/lang/switch",
        element: <Lang setLang={setLang} />,
      },

      {
        path: "kr/Default.aspx", // /index.aspx 경로도 동일 컴포넌트 렌더링
        element: <NNP />,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={Loading}>
            {lang === "ko" ? <NNP lang="ko" setLang={setLang} /> : <NNPEN lang="en" setLang={setLang} />}
          </Suspense>
        ),
        //<Suspense>는 **로딩 중일 때 표시할 UI (fallback 속성)**를 지정하는 역할을 함.
      },
      {
        path: "/auth",
        element: (
          <Suspense fallback={Loading}>
            {lang === "ko" ? <AuthPage lang="ko" setLang={setLang} /> : <AuthPageEN lang="en" setLang={setLang} />}
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
            <SampleDev lang={lang} setLang={setLang}></SampleDev>
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={Loading}>
            <AboutLayout lang={lang} setLang={setLang}></AboutLayout>
          </Suspense>
        ),
        children: [
          { path: "ceo", element: lang === "ko" ? <Ceo /> : <CeoEN /> },
          { path: "vision", element: lang === "ko" ? <Vision /> : <VisionEN /> },
          { path: "history", element: lang === "ko" ? <History /> : <HistoryEN /> },
          { path: "road", element: lang === "ko" ? <Road /> : <RoadEN /> },
        ],
      },
      {
        path: "company",
        element: (
          <Suspense fallback={Loading}>
            <CompanyLayout lang={lang} setLang={setLang}></CompanyLayout>
          </Suspense>
        ),
        children: [
          { path: "chung", element: lang === "ko" ? <Chung /> : <ChungEN /> },
          { path: "osse", element: lang === "ko" ? <Osse /> : <OsseEN /> },
          { path: "hyechun", element: lang === "ko" ? <Hyechun /> : <HyechunEN /> },
        ],
      },
      {
        path: "certification",
        element: (
          <Suspense fallback={Loading}>
            <CertificationLayout lang={lang} setLang={setLang}></CertificationLayout>
          </Suspense>
        ),
        children: [
          { path: "fssc", element: lang === "ko" ? <Fssc /> : <FsscEN /> },
          { path: "haccp", element: lang === "ko" ? <Haccp /> : <HaccpEN /> },
          { path: "document", element: lang === "ko" ? <Document /> : <DocumentEN /> },
        ],
      },
      {
        path: "recruit",
        element: (
          <Suspense fallback={Loading}>
            <RecruitLayout lang={lang} setLang={setLang}></RecruitLayout>
          </Suspense>
        ),
        children: [
          { path: "info", element: <RecruitInfo lang={lang} setLang={setLang}></RecruitInfo> },
          {
            path: "policy",
            element:
              lang === "ko" ? (
                <PolicyInfo lang={lang} setLang={setLang} />
              ) : (
                <PolicyInfoEN lang={lang} setLang={setLang} />
              ),
          },
          {
            path: "process",
            element:
              lang === "ko" ? (
                <ProcessInfo lang={lang} setLang={setLang} />
              ) : (
                <ProcessInfoEN lang={lang} setLang={setLang} />
              ),
          },
          {
            path: "benefit",
            element:
              lang === "ko" ? (
                <BenefitInfo lang={lang} setLang={setLang} />
              ) : (
                <BenefitInfoEN lang={lang} setLang={setLang} />
              ),
          },
        ],
      },
      {
        path: "business",
        children: [
          {
            path: "products",
            element:
              lang === "ko" ? <Product lang={lang} setLang={setLang} /> : <ProductEN lang={lang} setLang={setLang} />,
          },

          {
            path: "containers",
            element:
              lang === "ko" ? (
                <Container lang={lang} setLang={setLang} />
              ) : (
                <ContainerEN lang={lang} setLang={setLang} />
              ),
          },
          {
            path: "product/:type",
            element: lang === "ko" ? <Sort lang={lang} setLang={setLang} /> : <SortEN lang={lang} setLang={setLang} />,
          },
        ],
      },

      {
        path: "rnd",
        element: (
          <Suspense fallback={Loading}>
            <RndLayout lang={lang} setLang={setLang}></RndLayout>
          </Suspense>
        ),
        children: [
          { path: "info", element: lang === "ko" ? <Info /> : <InfoEN /> },
          { path: "structure", element: lang === "ko" ? <Structure /> : <StructureEN /> },
          { path: "equipment", element: lang === "ko" ? <Equipment /> : <EquipmentEN /> },
          { path: "research", element: lang === "ko" ? <Research /> : <ResearchEN /> },
        ],
      },
      {
        path: "brand",
        element: (
          <Suspense fallback={Loading}>
            <BrandLayout lang={lang} setLang={setLang}></BrandLayout>
          </Suspense>
        ),
        children: [
          { path: "wizus/:type", element: lang === "ko" ? <Wizus /> : <WizusEN /> },
          { path: "healthy/:type", element: lang === "ko" ? <Healthy /> : <HealthyEN /> },
          { path: "pb", element: lang === "ko" ? <PB /> : <PBEN /> },
        ],
      },
      {
        path: "cs",
        children: [
          {
            path: "contact",
            element: (
              <Suspense fallback={Loading}>
                {lang === "ko" ? <Contact lang={lang} setLang={setLang} /> : <ContactEN lang="en" setLang={setLang} />}
              </Suspense>
            ),
          },
          {
            path: "faq",
            element: (
              <Suspense fallback={Loading}>
                {lang === "ko" ? <Faq lang={lang} setLang={setLang} /> : <FaqEN lang="en" setLang={setLang} />}
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
      /*
    {
      path: "*",
      element: (
        <Suspense fallback={Loading}>
          <Waiting></Waiting>
        </Suspense>
      ),
    },
    */
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

      { path: "/en/Company/Info.aspx", element: <Navigate to="/about/vision/" replace /> },
      { path: "/en/Product/pd_Can.aspx", element: <Navigate to="/business/containers/" replace /> },
      { path: "/en/Product/Trade.aspx", element: <Navigate to="/" replace /> },
    ],
    {
      basename: import.meta.env.BASE_URL, // 깃허브 페이지스를 위한 설정
    },
  );
}
