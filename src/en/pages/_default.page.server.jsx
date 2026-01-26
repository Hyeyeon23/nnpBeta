export { render };

import ReactDOMServer from "react-dom/server";

function render(pageContext) {
  const { Page, documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "꺄꺄꺄꺄꺄꺄꺄꺄꺄꺄꺄";

  const pageHtml = ReactDOMServer.renderToString(<Page />);

  return `<!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
    </head>
    <body>
      <div id="root">${pageHtml}</div>
    </body>
  </html>`;
}
