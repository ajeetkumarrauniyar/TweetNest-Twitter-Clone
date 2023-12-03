export const API_BASE_URL = "http://localhost:4000/api";

export const Authorization = {
  headers: {
    "Content-type": "application/json",
    authorization: "Bearer " + localStorage.getItem("JWTToken"),
  },
};
