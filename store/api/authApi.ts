import { ICreateUser } from "../../types/api/auth";
import { emptySplitApi } from "./base";

export interface User {
	id: number;
	name: string;
}

export const authApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		createUser: build.mutation<unknown, ICreateUser>({
			query: (body) => ({
				url: "users",
				method: "POST",
				body,
			}),
		}),
		userLogIn: build.mutation<unknown, unknown>({
			query: (body) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
		}),
		getLogedInUser: build.query<User, number>({
			query: () => "users",
			//providesTags: (result, error, id) => [{ type: 'User', id }],
		}),
	}),
	overrideExisting: false,
});

export const { useCreateUserMutation, useUserLogInMutation, useGetLogedInUserQuery } = authApi;
