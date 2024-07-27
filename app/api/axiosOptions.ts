import axios from "axios";

const serverApiHost = process.env.NEXT_PUBLIC_API_HOST;

export const serverAxios = axios.create({
    baseURL: `${serverApiHost}`,
})

export const coingeckoAxios = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});
