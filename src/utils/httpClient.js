import Axios from "axios";

const api = Axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/api',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

class HttpClient {
    get(url, configs = null) {
        return api.get(url, configs)
    }
    post(url, data, configs = null) {
        return api.post(url, data, configs)
    }
    put(url, data = null, configs = null) {
        return api.put(url, data, configs)
    }
    delete(url, configs = null) {
        return api.delete(url, configs)
    }
    setToken(newToken) {
        api.defaults.headers['Authorization'] = `Bearer ${newToken}`;
        localStorage.setItem('token', newToken);
    }
    removeToken() {
        delete api.defaults.headers['Authorization'];
        localStorage.removeItem('token');
    }
}

export const httpClient = new HttpClient();