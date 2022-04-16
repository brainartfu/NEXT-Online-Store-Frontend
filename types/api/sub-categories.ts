export interface IPostSubCategories {
	name: string;
	slug: string;
	categoryId: string;
	description: string;
	status: boolean;
}

export interface IGetSubCategories extends IPostSubCategories {
	_id: string;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateSubCategories extends IPostSubCategories {}
