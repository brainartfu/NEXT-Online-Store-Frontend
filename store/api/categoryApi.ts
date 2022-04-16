import { IGetCategories, IPostCategories, UpdateCategories } from "../../types/api/categories";
import { emptySplitApi } from "./base";

export const categoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getCategories: build.query<IGetCategories[], void>({
			query: () => ({
				url: "categories",
			}),
		}),
		getSingleCategory: build.query<IGetCategories, string>({
			query: (id) => ({
				url: `categories/${id}`,
			}),
		}),
		createCategories: build.mutation<IPostCategories, IPostCategories>({
			query: (body) => ({
				url: "categories",
				method: "POST",
				body,
			}),
		}),
		updateCategory: build.mutation<IGetCategories, { id: string; body: UpdateCategories }>({
			query: ({ id, ...body }) => ({
				url: `categories/${id}`,
				method: "PATCH",
				...body,
			}),
		}),
		deleteCategory: build.mutation<IGetCategories, string>({
			query: (id) => ({
				url: `categories/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetCategoriesQuery,
	useGetSingleCategoryQuery,
	useCreateCategoriesMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation,
} = categoryApi;
