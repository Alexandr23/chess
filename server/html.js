const IS_PROD = process.env.NODE_ENV === "production";
const STATIC_BASE_PATH = IS_PROD
  ? ""
  : `http://${process.env.DEV_SERVER_HOST}:${process.env.DEV_SERVER_PORT}`;

const html = () => `
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>Chess</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        ${IS_PROD ? `<link rel="stylesheet" href="/dist/styles.css">` : ""}
    </head>
    <body>
        <div id="app"></div>
        <script src="${STATIC_BASE_PATH}/dist/app.js"></script>
    </body>
    </html>
`;

exports.html = html;
