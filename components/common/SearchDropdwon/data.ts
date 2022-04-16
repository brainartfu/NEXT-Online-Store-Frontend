import { IProduct } from "../../../types/product";
import { IMAGES } from "../../../uiElements";

export const productData: IProduct[] = [
	{
		id: "p1",
		image: IMAGES.WhiteTshirtImg,
		name: "White Cotton Sweatshirt",
		price: 25,
		discount: 50,
	},
	{
		id: "p2",
		image: IMAGES.BlackTshirtImg,
		name: "Black Cotton Sweatshirt ",
		price: 25,
		discount: 50,
	},
	{
		id: "p3",
		image: IMAGES.WhiteTshirtImg,
		name: "White Cotton Sweatshirt",
		price: 50,
		discount: 90,
	},
	{
		id: "p4",
		image: IMAGES.BlackTshirtImg,
		name: "Black Cotton Sweatshirt ",
		price: 50,
		discount: 25,
	},
];
