// inject-meta.js
import fs from 'fs';
import path from 'path';

const routes = {
    '/about/ceo': {
        title: '자연과사람들 인사말',
        /*    description: '우리 CEO 소개 페이지',
           image: '/images/ceo.png', */
    },
    '/about/vision': {
        title: '자연과사람들의 비젼',
    },
    '/about/history': {
        title: '자연과사람들의 연혁',
    },
    '/about/road': {
        title: '자연과사람들 오시는길',
    },
    '/company/chung': {
        title: '자연과사람들 관련사 정식품',
    },
    '/about/osse': {
        title: '자연과사람들 관련사 오쎄',
    },
    '/company/hyechun': {
        title: '자연과사람들 관련사 (재)혜춘장학회',
    },
    '/certification/document': {
        title: '자연과사람들 식품안전인증현황',
    },
    '/certification/haccp': {
        title: '자연과사람들 식품안전인증현황',
    },
    '/certification/fssc': {
        title: '자연과사람들 식품안전인증현황',
    },
    '/recruit/info': {
        title: '자연과사람들 채용공고',
    },
    '/business/products': {
        title: '자연과사람들 제품유형',
    },
    '/business/product/soy': {
        title: '자연과사람들 두유액',
    },
    '/business/product/protein': {
        title: '자연과사람들 단백질 음료',
    },
    '/business/product/balance': {
        title: '자연과사람들 균형영양식 ',
    },
    '/business/product/particle': {
        title: '자연과사람들 파티클',
    },
    '/business/product/sikhye': {
        title: '자연과사람들 식혜',
    },
    '/business/product/sauce': {
        title: '자연과사람들 소스',
    },
    '/business/product/sterilized': {
        title: '자연과사람들 멸균유',
    },
    '/business/product/juice': {
        title: '자연과사람들 주스',
    },
    '/business/product/coffee': {
        title: '자연과사람들 커피',
    },
    '/business/containers': {
        title: '자연과사람들 용기유형',
    },
    '/brand/wizus/greenlemon': {
        title: '자연과사람들 브랜드 WIZUS',
    },
    '/brand/healthy/sikhye': {
        title: '자연과사람들 브랜드 건강담은 식혜',
    },
    '/brand/pb': {
        title: '자연과사람들 브랜드 자연과사람들이만든',
    },
    '/cs/faq': {
        title: '자연과사람들 자주묻는 질문',
    },
    '/cs/contact': {
        title: '자연과사람들 1:1문의',
    },
    '/dev': {
        title: '자연과사람들 3D',
    },
};

const distDir = './dist';
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

Object.entries(routes).forEach(([route, meta]) => {
    const html = template.replace('</head>', `
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description ? meta.description : '음료 OEM, ODM, PB, B2B 생산전문기업, 음료수출, 멸균팩, 살균팩, 캔생산전문기업"'}" />
    /* <meta property="og:image" content="${meta.image}" /> */
</head>`);

    const outPath = path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`✅ Injected OG meta into ${route}`);
});
