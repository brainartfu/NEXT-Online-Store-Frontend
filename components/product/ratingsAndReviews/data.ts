import { StaticImageData } from "next/image";
import { IMAGES } from "../../../uiElements";

export interface CommentType {
	avatar: string | StaticImageData;
	avatarName: string;
	stars: number;
	productImage?: string | StaticImageData;
	productName: string;
	desc: string;
}

export const sliderData: CommentType[] = [
	// {
	// 	avatar: IMAGES.Health1Img,
	// 	avatarName: "Jia Doe",
	// 	stars: 3,
	// 	productName: "White Cotton Sweatshirt",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	// },
	// {
	// 	avatar: IMAGES.Health1Img,
	// 	avatarName: "Jia Doe",
	// 	stars: 3,
	// 	productImage: IMAGES.WhiteTshirtImg,
	// 	productName: "White Cotton Sweatshirt",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	// },
	{
		avatar: IMAGES.Health1Img,
		avatarName: "Jia Doe",
		stars: 3,
		productName: "White Cotton Sweatshirt",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		avatar: IMAGES.Health1Img,
		avatarName: "Jia Doe",
		stars: 3,
		productName: "White Cotton Sweatshirt",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		avatar: IMAGES.Health1Img,
		avatarName: "Jia Doe",
		stars: 3,
		productName: "White Cotton Sweatshirt",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
];
