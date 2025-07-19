import Axios from "axios";
import { redirect } from "react-router";

const api = Axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

class HttpClient {
    constructor() {
        api.interceptors.response.use(
            response => response,
            async error => {
                const originalRequest = error.config;
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const refreshToken = localStorage.getItem('refreshToken');
                        const res = await api.post('/api/refresh-token', { refreshToken });
                        const newAccessToken = res.data.accessToken;

                        this.setToken(newAccessToken);

                        originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
                        return api(originalRequest);
                    } catch (err) {
                        console.error('Token refresh failed:', err);
                        this.removeToken();
                        redirect('/account/login');
                    }
                }

                return Promise.reject(error);
            }
        );
    }

    get(url, configs = null) {
        return api.get(url, configs);
    }

    post(url, data, configs = null) {
        return api.post(url, data, configs);
    }

    put(url, data = null, configs = null) {
        return api.put(url, data, configs);
    }

    delete(url, configs = null) {
        return api.delete(url, configs);
    }

    setToken(newToken) {
        api.defaults.headers['Authorization'] = `Bearer ${newToken}`;
        localStorage.setItem('accessToken', newToken);
    }

    removeToken() {
        delete api.defaults.headers['Authorization'];
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}

export const httpClient = new HttpClient();
