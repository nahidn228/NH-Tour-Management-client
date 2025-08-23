import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (divisionData) => ({
        url: "division/create",
        method: "POST",
        data: divisionData,
      }),
      invalidatesTags: ["DIVISION"],
    }),

    getDivisions: builder.query({
      query: (params) => ({
        url: "/division",
        method: "GET",
        params,
      }),
      providesTags: ["DIVISION"],
      //only get the data
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useAddDivisionMutation, useGetDivisionsQuery } = divisionApi;
