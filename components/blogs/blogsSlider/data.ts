import { StaticImageData } from "next/image";
import { IMAGES } from "./../../../uiElements/images";

export interface ISliderData {
	image: StaticImageData | string;
	title: string;
	subTitle: string;
	desc: string;
}

export const sliderData: ISliderData[] = [
	{
		image: IMAGES.BlogBanner1,
		title: "Monthly Phone Wallpaper",
		subTitle: "by Hoomey on April 26, 2022",
		desc: `Wallpaper for your phone every month Spring has sprung, and we've got a free phone wallpaper for you! With this beautiful phone wallpaper, you can celebrate nature's serenity! Enchanted gardens, violet blossoms, and vintage spells inspired this collection! You may use it online on your phone or print it out and paste it into your favourite bullet journal page for a beautiful look! Simply fill...`,
	},
	{
		image: IMAGES.BlogBanner2,
		title: "Monthly Phone Wallpaper",
		subTitle: "by Hoomey on April 26, 2022",
		desc: `Wallpaper for your phone every month Spring has sprung, and we've got a free phone wallpaper for you! With this beautiful phone wallpaper, you can celebrate nature's serenity! Enchanted gardens, violet blossoms, and vintage spells inspired this collection! You may use it online on your phone or print it out and paste it into your favourite bullet journal page for a beautiful look! Simply fill...`,
	},
	{
		image: IMAGES.BlogBanner1,
		title: "Monthly Phone Wallpaper",
		subTitle: "by Hoomey on April 26, 2022",
		desc: `Wallpaper for your phone every month Spring has sprung, and we've got a free phone wallpaper for you! With this beautiful phone wallpaper, you can celebrate nature's serenity! Enchanted gardens, violet blossoms, and vintage spells inspired this collection! You may use it online on your phone or print it out and paste it into your favourite bullet journal page for a beautiful look! Simply fill...`,
	},
];
