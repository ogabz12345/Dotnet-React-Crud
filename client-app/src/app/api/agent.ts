import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
axios.defaults.baseURL = 'http://localhost:5000/api/v1';

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(500);
    return response;
  } catch (error) {
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: () => requests.get<Activity[]>('/Activities'),
  details: (id: string) => requests.get<Activity>(`/Activities/${id}`),
  create: (activity: Activity) => requests.post<void>(`/Activities`, activity),
  update: (activity: Activity) =>
    requests.put<void>(`/Activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete<void>(`/Activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
