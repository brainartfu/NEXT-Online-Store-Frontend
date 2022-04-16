export interface ISearchFaqs {
	heading: string;
	questions: {
		link: string;
		item: string;
	}[];
}

export const searchData: ISearchFaqs[] = [
	{
		heading: "PRODUCTS & FIT",
		questions: [
			{ link: "/", item: "Will my shoes stretch?" },
			{ link: "/", item: "Are shoes good for flat feet?" },
			{ link: "/", item: "Are product waterproof?," },
			{ link: "/", item: "Can you wash shoes insoles?" },
			{ link: "/", item: "Are products washable?" },
		],
	},
	{
		heading: "RETURNS & EXCHANGES",
		questions: [
			{ link: "/", item: "Can I return or exchange an in store purchase online?" },
			{ link: "/", item: "How do I make a gift exchange?" },
			{ link: "/", item: "What is Hoomey’s return policy?" },
		],
	},
	{
		heading: "ORDERS, SHIPPING & TRACKING",
		questions: [
			{ link: "/", item: "Can I return or exchange an in store purchase online?" },
			{ link: "/", item: "How do I make a gift exchange?" },
			{ link: "/", item: "What is Hoomey’s return policy?" },
		],
	},
	{
		heading: "PAYMENTS & REFUNDS",
		questions: [
			{ link: "/", item: "Will my shoes stretch?" },
			{ link: "/", item: "Are shoes good for flat feet?" },
			{ link: "/", item: "Are product waterproof?," },
		],
	},
];
