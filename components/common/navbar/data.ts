import { ICollection } from "../../../types/collection";
import { IMAGES } from "../../../uiElements";

interface ItemData extends ICollection {
	link: string;
}

export const itemData: ItemData[] = [
	{ link: "/women", image: IMAGES.WomenImg, content: "Women" },
	{ link: "/men", image: IMAGES.MenImg, content: "Men" },
	{ link: "/kids", image: IMAGES.KidsImg, content: "Kids" },
	{ link: "/baby", image: IMAGES.BabyCareImg, content: "Baby Care" },
	{ link: "/pets", image: IMAGES.PetsImg, content: "Pets" },
	{ link: "/health-and-beauty", image: IMAGES.HealthAndBeautyImg, content: "Health & Beauty" },
	{ link: "/electronics", image: IMAGES.ElectronicsImg, content: "Electronics" },
	{ link: "/jewelry", image: IMAGES.JewelryImg, content: "Jewelry" },
];
