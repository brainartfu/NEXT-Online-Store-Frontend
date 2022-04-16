import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_BASE_API,

		// prepareHeaders: (headers, { getState }) => {
		// 	const { auth } = getState();
		// 	const token = auth.access_token;

		// 	if (token) headers.set("authorization", `Bearer ${token}`);

		// 	return headers;
		// },
	}),
	endpoints: () => ({}),
});
