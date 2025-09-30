import { useEffect } from "react";

function Meta({ title }) {
  useEffect(() => {
    document.title = title;
    // Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    /* const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description); */
  }, [title]);

  return null; // 화면에는 아무것도 안 그려짐
}

export default Meta;
