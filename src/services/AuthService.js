import { httpClient } from "../utils/httpClient";

export const login = (data) => {
    return httpClient.post("api/login", data)
}
export const register = (data) => {
    return httpClient.post("api/register", data)
}
export const verifyCode = (code) => {
    return httpClient.get("api/verify", {
        params: { code }
    })
}
export const userInfoForm = (data) => {
    return httpClient.post("/user/complete/profile", data)
}
export const submitProfilephoto = (photo) => {
    return httpClient.post("/user/complete/photo", photo, {
        withCredentials: true
    })
}
export const getProfessions = (data) => {
    return httpClient.get("/api/enums/professions", data)
}
