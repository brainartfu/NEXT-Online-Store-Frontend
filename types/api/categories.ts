export interface IPostCategories {
	name: string;
	slug: string;
	description: string;
	status: boolean;
}

export interface IGetCategories extends IPostCategories {
	_id: string;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateCategories extends IPostCategories {}
