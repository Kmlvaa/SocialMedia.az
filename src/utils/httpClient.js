import Axios from "axios";

const token = localStorage.getItem('token');

const api = Axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});

class HttpClient{
    get(url, configs=null){
        return api.get(url, configs)
    }
    post(url, data, configs=null){
        return api.post(url, data, configs)
    }
    put(url, data=null, configs=null){
        return api.put(url, data, configs)
    }
    delete(url, configs=null){
        return api.delete(url, configs)
    }
}

export const httpClient = new HttpClient();