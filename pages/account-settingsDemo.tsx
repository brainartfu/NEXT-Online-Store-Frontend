import type { NextPage } from "next";
import Head from "next/head";
import {
	// ChangePassword,
	// MyAccount,
	// AddressBook,
	// MyOrders,
	// MyWishlist,
	PaymentMethods,
} from "../components/accountSettings";

import {
	Box,
	Container,
	Typography,
	CssBaseline,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import {
	AccountSettingsSvg,
	AddressBookSvg,
	ChangePassSvg,
	ColorHeartSvg,
	ColorShoppingBagSvg,
	PaymentMethodsSvg,
} from "../components/icons";

const drawerWidth = 340;

const menus = [
	{ link: "/account-settings", name: "Account Settings", icon: <AccountSettingsSvg width={22} height={28} /> },
	{
		link: "/account-settings/change-password",
		name: "Change Password",
		icon: <ChangePassSvg width={22} height={28} />,
	},
	{ link: "/account-settings/address-book", name: "Address Book", icon: <AddressBookSvg width={22} height={28} /> },
	{ link: "/account-settings/my-orders", name: "My Orders", icon: <ColorShoppingBagSvg width={22} height={28} /> },
	{ link: "/account-settings/my-whishlist", name: "My Wishlist", icon: <ColorHeartSvg width={25} height={20} /> },
	{
		link: "/account-settings/payment-methods",
		name: "Payment Methods",
		icon: <PaymentMethodsSvg width={22} height={28} />,
	},
];

const AccountSettings: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Account Settings</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* account & settings */}
			<Container>
				<Typography sx={{ mb: 6 }} variant="h6" textAlign="center">
					My Account
				</Typography>
				<Box sx={{ display: "flex", gap: 2.5 }}>
					<CssBaseline />
					<Box
						sx={{
							bgcolor: "#FBFBFB",
							p: 4,
							width: drawerWidth,
							flexShrink: 0,
							"& .MuiDrawer-paper": {
								width: drawerWidth,
								boxSizing: "border-box",
							},
						}}
					>
						<Divider />
						<List>
							{menus.map((menu) => (
								<ListItem key={menu.name} disablePadding>
									<ListItemButton>
										<ListItemIcon>{menu.icon}</ListItemIcon>
										<ListItemText primary={menu.name} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
					{/* body content */}
					<Box component="main" sx={{ flexGrow: 1, bgcolor: "#FBFBFB", p: 4 }}>
						{/* <MyAccount /> */}
						{/* <ChangePassword /> */}
						{/* <AddressBook /> */}
						{/* <MyOrders /> */}
						{/* <MyWishlist /> */}
						<PaymentMethods />
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default AccountSettings;
