const IS_PROD = process.env.NODE_ENV === "production";
const STATIC_BASE_PATH = IS_PROD
  ? `http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  : `http://${process.env.DEV_SERVER_HOST}:${process.env.DEV_SERVER_PORT}`;

const html = () => `
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>Chess</title>
        ${
          IS_PROD
            ? `<link rel="stylesheet" href="${STATIC_BASE_PATH}/dist/styles.css">`
            : ""
        }
    </head>
    <body>
        <div id="app"></div>
        <script src="${STATIC_BASE_PATH}/dist/app.js"></script>
    </body>
    </html>
`;

exports.html = html;
