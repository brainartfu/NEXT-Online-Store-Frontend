import { IGetSubCategories, IPostSubCategories, UpdateSubCategories } from "../../types/api/sub-categories";
import { emptySplitApi } from "./base";

export const SubcategoryApi = emptySplitApi.injectEndpoints({
	endpoints: (build) => ({
		getSubCategories: build.query<IGetSubCategories[], string>({
			query: (id) => ({
				url: "sub-categories",
				params: { id },
			}),
		}),
		getSingleSubCategory: build.query<IGetSubCategories, string>({
			query: (id) => ({
				url: `sub-categories/${id}`,
			}),
		}),
		createSubCategories: build.mutation<IPostSubCategories, IPostSubCategories>({
			query: (body) => ({
				url: "sub-categories",
				method: "POST",
				body,
			}),
		}),
		updateSubCategory: build.mutation<IGetSubCategories, { id: string; body: UpdateSubCategories }>({
			query: ({ id, ...body }) => ({
				url: `sub-categories/${id}`,
				method: "PATCH",
				...body,
			}),
		}),
		deleteSubCategory: build.mutation<IGetSubCategories, string>({
			query: (id) => ({
				url: `sub-categories/${id}`,
				method: "DELETE",
			}),
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetSubCategoriesQuery,
	useGetSingleSubCategoryQuery,
	useCreateSubCategoriesMutation,
	useUpdateSubCategoryMutation,
	useDeleteSubCategoryMutation,
} = SubcategoryApi;
