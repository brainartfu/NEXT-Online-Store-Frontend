import { StaticImageData } from "next/image";

export interface IProduct {
	id: string;
	image: string | StaticImageData;
	name: string;
	price: number;
	discount: number;
}
