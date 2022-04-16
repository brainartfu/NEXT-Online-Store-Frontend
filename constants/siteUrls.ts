export const ROUTING_TREE = {
	HOME: "/",
	CART: "/cart",
	CHECKOUT: "/checkout",
	SIGN_IN_CHECKOUT: "/sign-in-checkout",
	FAVOURITES: "/favorites",
	MEN: "/men",
	WOMEN: "/women",
	KIDS: "/kids",
	MY_ORDERS: "/my-orders",

	ACCOUNT_SETTINGS: {
		ROOT: "/account-settings",
		CHANGE_PASSWORD: "/change-password",
		ADDRESS_BOOK: "/address-book",
		MY_ORDERS: "/my-orders",
		MY_WISHLIST: "/my-wishlist",
		PAYMENT_METHODS: "/payment-methods",
	},

	PRIVACY_POLICY: "privacy-policy",
	TERMS_OF_SERVICE: "terms-of-service",

	DASHBOARD: {
		ROOT: "/dashboard",
		ORDERS: {
			ROOT: "orders",
			DETAILS: "details",
			ABANDONED_CART: "abandoned-cart",
			CREATE: "create",
		},
		PRODUCTS: {
			ROOT: "products",
			ADD: {
				ROOT: "add",
				EDIT_VARIANT: "edit-variant",
			},
			CATEGORY: {
				ROOT: "categories",
				ADD: "add",
			},
		},
		CUSTOMERS: {
			ROOT: "customers",
			DETAILS: "details",
			ADD: "add",
		},
		REVIEWS: {
			ROOT: "reviews",
			DETAILS: "details",
		},
		SHIPPING: {
			ROOT: "shipping",
			ADD_NEW: "add-new",
		},
		ANALYTICS: {
			ROOT: "analytics",
			REPORTINGS: "reportings",
		},
		NOTIFICATION: "notification",
		SETTINGS: {
			ROOT: "settings",
			MEGA_MENU: "mega-menu",
			EMAIL: { ROOT: "email", SEND: "send" },
			BLOGS: { ROOT: "blogs", ADD: "add" },
			CONTACT_OR_NEWSLETTER: "contact-or-newsletter",
			MANAGE_COUPON: "manage-coupon",
		},
	},
};
