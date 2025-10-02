// src/meta/pageMetaMap.js

import NNP from "../pages/NNP.jsx"
import Ceo from "../pages/about/Ceo.page.jsx"
export const pageMetaMap = {
    "/": {
        component: NNP,
        meta: {
            title: "Home Page",
            description: "Welcome to the home page",
            ogTitle: "Home Page OG",
            ogDescription: "Open Graph description for home page",
            ogImage: "/images/home-og.png",
        }
    },
    "/about/ceo": {
        component: Ceo,
        meta: {
            title: "About Page",
            description: "Learn more about us",
            ogTitle: "About Page OG",
            ogDescription: "Open Graph description for about page",
            ogImage: "/images/about-og.png",
        }
    }
}
