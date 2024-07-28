import axios from "axios";

const serverApiHost = process.env.NEXT_PUBLIC_API_HOST;

export const serverAxios = axios.create({
    baseURL: `${serverApiHost}`,
})

serverAxios.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const coingeckoAxios = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});
