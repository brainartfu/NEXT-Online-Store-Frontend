import { StaticImageData } from "next/image";

export interface ICollection {
	image: string | StaticImageData;
	content: string;
	link: string;
}
