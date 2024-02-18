import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { paths } from '#types/api-schema';
import { ApiProps, ApiResult } from '#types/ApiType';

type FetchCurrenciesSchema = paths['/currencies']['get'];
type FetchCurrenciesProps = ApiProps<FetchCurrenciesSchema>;
type FetchCurrenciesResult = ApiResult<FetchCurrenciesSchema>;

type FetchLatestRateSchema = paths['/last']['get'];
type FetchLatestRateProps = ApiProps<FetchLatestRateSchema>;
type FetchLatestRateResult = ApiResult<FetchLatestRateSchema>;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_EXRATES_URL,
  }),
  endpoints: (builder) => ({
    fetchCurrencies: builder.query<FetchCurrenciesResult, FetchCurrenciesProps>({
      query: () => ({
        url: '/currencies',
        method: 'GET',
      }),
    }),
    fetchLatestRate: builder.query<FetchLatestRateResult, FetchLatestRateProps>({
      query: (params) => ({
        url: '/last',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useFetchCurrenciesQuery, useFetchLatestRateQuery } = api;
