import axios, { AxiosError } from "axios" 

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const httpService = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

export const unsecureHttpService = axios.create({
    baseURL: `${BASE_URL}`,
})

unsecureHttpService.interceptors.response.use((data: any) => {
    return data;
}, async (error: AxiosError<any, unknown>) => {
    return Promise.reject(error);
});

httpService.interceptors.request.use(
  function (config: any) {
    // const token = Cookies.get("access_token")
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " +token
    // }
    return config
  },
  function (error: any) {
    // if (error.response.status === 500) {
    //   error.response.data.message = "Something wrong has happened. Try again later."
    // }
    return Promise.reject(error)
  },
)

export default httpService