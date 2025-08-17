import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} = authApi;
