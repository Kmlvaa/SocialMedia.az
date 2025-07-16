import { httpClient } from "../utils/httpClient";

export const login = (data) => {
    return httpClient.post("/account/login", data)
}

export const register = (data) => {
    return httpClient.post("/account/register", data)
}

export const verifyCode = (data) => {
    return httpClient.post("/account/verifyCode", data)
}

export const userInfoForm = (data) => {
    return httpClient.post("/account/complete-profile", data)
}
