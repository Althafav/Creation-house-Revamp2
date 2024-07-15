export default class Globals {


    static SITE_NAME = "Creation House";

    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://evshow-global.com/"
            : "http://localhost:4000/";
}