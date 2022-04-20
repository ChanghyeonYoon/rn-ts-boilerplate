/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios, { AxiosError, AxiosPromise, AxiosResponse, Method } from 'axios';
import queryString from 'query-string';

import { API_URL } from '@/Config';
import { getItem, STORAGE_KEYS } from './storage';

interface IOnRequest {
  baseURL?: string;
  url: string;
  method: Method;
  query?: Record<string, any>;
  data?: any;
  headers?: any;
}

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(async config => {
  console.log('common/axios request', config);

  const accessToken = (await getItem(STORAGE_KEYS.accessToken)) as string;
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

const parseQuery = (query?: Record<string, any>): string => {
  if (!query) {
    return '';
  }
  return `?${queryString.stringify(query)}`;
};

export const onRequest = async ({
  baseURL = API_URL,
  url,
  method,
  query,
  data,
  headers,
}: IOnRequest): Promise<AxiosPromise | AxiosResponse> => {
  try {
    return await instance({
      method,
      baseURL: baseURL,
      url: url + parseQuery(query),
      data,
      headers,
    });
  } catch (error) {
    const e = error as AxiosError;
    console.warn('axios/onRequest error: ', e.response);
    return e.response as AxiosResponse;
  }
};
