let PORT = 8000;
let HOST = "localHost";
let PROTOCOL = "http";
let API_ROUTE = "/api/";
let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

module.exports = {
    PORT,
    HOST,
    PROTOCOL,
    API_ROUTE,
    FULL_PATH,
    FULL_API_PATH,
};