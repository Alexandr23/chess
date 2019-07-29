const IS_PROD = process.env.NODE_ENV === "production";
const IS_SERVER = typeof window === "undefined";
var config = {};

if (IS_SERVER) {
  const HOST = process.env.HOST || "0.0.0.0";
  const PORT = process.env.PORT || 8889;
  const DEV_SERVER_URL = "http://" + HOST + ":" + (+PORT + 1);

  config = {
    IS_PROD: IS_PROD,
    IS_SERVER: IS_SERVER,
    HOST: HOST,
    PORT: PORT,
    STATIC_URL: IS_PROD ? process.env.STATIC_URL : DEV_SERVER_URL
  };
} else {
  config = {
    IS_PROD: IS_PROD,
    IS_SERVER: IS_SERVER,
    STATIC_URL: decodeURI(window.STATIC_URL)
  };
}

module.exports = config;
