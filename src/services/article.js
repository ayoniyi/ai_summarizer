import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_ARTICLE_KEY;
// const options = {
//   method: "GET",
//   url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
//   params: {
//     url: "https://time.com/6266679/musk-ai-open-letter/",
//     length: "3",
//   },
//   headers: {
//     "X-RapidAPI-Key": "b089d6e398msh3f385ed7b744133p1eb1b3jsn9dc7c982d37a",
//     "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
//   },
// };

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
