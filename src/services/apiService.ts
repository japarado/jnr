import axios, {AxiosRequestConfig, AxiosResponse, AxiosInstance} from "axios";

const apiService: AxiosInstance = axios;

apiService.interceptors.request.use((config: AxiosRequestConfig) => 
{
	// Do something before request is sent
	return config;
}, (error) => 
{
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
apiService.interceptors.response.use((response: AxiosResponse) => 
{
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	return response;
}, (error) => 
{
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});

export default apiService;
