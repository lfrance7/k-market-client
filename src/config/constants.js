export const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://kwon-market-server.herokuapp.com/"
        : "http://localhost:8090";