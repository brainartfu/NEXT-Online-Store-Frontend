import {
	Box,
	List,
	Badge,
	Drawer,
	AppBar,
	Toolbar,
	ListItem,
	Typography,
	IconButton,
	CssBaseline,
	ListItemText,
	ListItemIcon,
	ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import { FC, useState } from "react";
import { AppAvatar, AppDivider } from "../components/styledComponents";

// icons
import {
	BarSvg,
	AppIconSvg,
	ReviewsSvg,
	SettingsSvg,
	CustomersSvg,
	CheckCartSvg,
	DeliveryCarSvg,
	DashboardMenuSvg,
	DashboardBagSvg,
	NotificationsSvg,
	NavNotificationsSvg,
} from "../components/icons";

import { Link } from "../components/ui";
import { AdminLayoutProps } from "../types/page";
import { IMAGES } from "../uiElements";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Logout, Settings } from "../uiElements/icons";
import { Notifications, SearchInput } from "../components/dashboard/common";
import styles from "../components/dashboard/common/styles";
import { ROUTING_TREE } from "../constants/siteUrls";
import { useRouter } from "next/router";
import { useAppDispatch } from "../store/hooks";
import { useWarningPopup } from "../store/slices/warningSlice";

const drawerWidth = 120;

const drawerItem = [
	{ icon: <DashboardMenuSvg />, text: "Dashboard", pathname: "/dashboard", link: ROUTING_TREE.DASHBOARD.ROOT },
	{
		icon: <CheckCartSvg />,
		text: "Orders",
		pathname: "/dashboard/orders",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.ORDERS.ROOT}`,
	},
	{
		icon: <DashboardBagSvg />,
		text: "Products",
		pathname: "/dashboard/products",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.PRODUCTS.ROOT}`,
	},
	{
		icon: <CustomersSvg />,
		text: "Customers",
		pathname: "/dashboard/customers",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.CUSTOMERS.ROOT}`,
	},
	{
		icon: <ReviewsSvg />,
		text: "Reviews",
		pathname: "/dashboard/reviews",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.REVIEWS.ROOT}`,
	},
	{
		icon: <DeliveryCarSvg />,
		text: "Shipping",
		pathname: "/dashboard/shipping",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.SHIPPING.ROOT}`,
	},
	{
		icon: <BarSvg />,
		text: "Analytics",
		pathname: "/dashboard/analytics",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.ANALYTICS.ROOT}`,
	},
	{
		icon: <NotificationsSvg />,
		text: "Notification",
		pathname: "/dashboard/notification",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.NOTIFICATION}`,
	},
	{
		icon: <SettingsSvg />,
		text: "Settings",
		pathname: "/dashboard/settings",
		link: `${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}`,
	},
];

const AdminLayout: FC<AdminLayoutProps> = ({ children, window }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);

	// handle dashboard drawer of menu
	const handleDrawerToggle = () => {
		setIsMobileOpen(!isMobileOpen);
	};

	// user profile
	const isOpen = Boolean(anchorEl);
	// notification
	const isNotificationOpen = Boolean(notificationAnchorEl);

	// handle user profile
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	// handle notification
	const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
		setNotificationAnchorEl(event.currentTarget);
	};

	// handle notification closer
	const handleNotificationClose = () => {
		setNotificationAnchorEl(null);
	};

	// handle user profile closer
	const handleClose = () => {
		setAnchorEl(null);
	};

	const drawer = (
		<div>
			{/*<Toolbar />*/}
			<Box sx={{ textAlign: "center", py: 0.8 }}>
				<Link href="/">
					<AppIconSvg sx={{ fontSize: 45 }} />
				</Link>
			</Box>
			<AppDivider sx={{ mb: 1.25, opacity: 0.5 }} />
			<List>
				{drawerItem.map((item, index) => (
					<Link href={item.link} key={index}>
						<ListItem disablePadding>
							<ListItemButton
								sx={{
									px: 1,
									width: "inherit",
									flexDirection: "column",
									bgcolor: router.pathname === item.pathname ? "primary.main" : "transparent",
									color: router.pathname === item.pathname ? "text.primary" : "common.white",
									"&:hover": { bgcolor: "primary.main", color: "text.primary" },
								}}
							>
								<ListItemIcon sx={{ minWidth: 0 }}>{item.icon}</ListItemIcon>
								<ListItemText
									sx={{ "& > span": { fontSize: 14, fontWeight: 500 } }}
									primary={item.text}
								/>
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* content */}

			<>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar
						position="fixed"
						sx={{
							width: { sm: `calc(100% - ${drawerWidth}px)` },
							boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
							ml: { sm: `${drawerWidth}px` },
							bgcolor: "common.white",
						}}
					>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Toolbar sx={{ flexGrow: 1 }}>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="open drawer"
									onClick={handleDrawerToggle}
									sx={{ mr: 2, display: { sm: "none" } }}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" sx={{ fontWeight: 400 }} noWrap>
									Hello <strong>John Doe</strong> 👋
								</Typography>
							</Toolbar>

							<Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 4 }}>
								{/* previous search input */}
								{/* <Search>
									<SearchIconWrapper>
										<GraySearchIcon sx={{ fontSize: 20 }} />
									</SearchIconWrapper>
									<StyledInputBase placeholder="Search" inputProps={{ "aria-label": "search" }} />
								</Search> */}

								<SearchInput />

								{/* notifications */}
								<div>
									<IconButton
										aria-haspopup="true"
										aria-label="notificatins"
										onClick={handleNotificationClick}
										aria-expanded={isNotificationOpen ? "true" : undefined}
										aria-controls={isNotificationOpen ? "notifications-menu" : undefined}
									>
										<Badge badgeContent={1} color="error">
											<NavNotificationsSvg />
										</Badge>
									</IconButton>

									{/* notifications menu popover */}
									<Notifications
										anchorEl={notificationAnchorEl}
										isOpen={isNotificationOpen}
										handleClose={handleNotificationClose}
									/>
								</div>

								{/* user actions */}
								<div>
									<Tooltip title="Account settings">
										<IconButton
											size="small"
											sx={{ ml: 2 }}
											aria-haspopup="true"
											onClick={handleClick}
											aria-expanded={isOpen ? "true" : undefined}
											aria-controls={isOpen ? "account-menu" : undefined}
										>
											{/* <Avatar sx={{ width: 40, height: 40 }} src={IMAGES.AvatarImg} /> */}

											<AppAvatar
												src={IMAGES.AvatarImg}
												alt="avatar"
												height={40}
												width={40}
												objectFit="cover"
												placeholder="blur"
											/>
										</IconButton>
									</Tooltip>

									{/* account menu dropdown */}
									<Menu
										anchorEl={anchorEl}
										id="account-menu"
										open={isOpen}
										onClose={handleClose}
										onClick={handleClose}
										PaperProps={{
											elevation: 0,
											sx: { ...styles.menu },
										}}
										transformOrigin={{ horizontal: "right", vertical: "top" }}
										anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
									>
										<Link
											href={`${ROUTING_TREE.DASHBOARD.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.ROOT}`}
										>
											<MenuItem>
												<ListItemIcon>
													<Settings fontSize="small" />
												</ListItemIcon>
												Settings
											</MenuItem>
										</Link>
										<MenuItem
											onClick={() =>
												dispatch(
													useWarningPopup(
														"Are you sure you want to logout from your account ? ",
													),
												)
											}
										>
											<ListItemIcon>
												<Logout fontSize="small" />
											</ListItemIcon>
											Logout
										</MenuItem>
									</Menu>
								</div>
							</Box>
						</Box>
					</AppBar>

					<Box
						component="nav"
						sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
						aria-label="mailbox folders"
					>
						{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
						<Drawer
							container={container}
							variant="temporary"
							open={isMobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
							sx={{
								display: { xs: "block", sm: "none" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawerWidth,
									color: "common.white",
									bgcolor: (theme) => theme.palette.secondary.main,
								},
							}}
						>
							{drawer}
						</Drawer>
						<Drawer
							variant="permanent"
							sx={{
								display: { xs: "none", sm: "block" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawerWidth,
									color: "common.white",
									bgcolor: (theme) => theme.palette.secondary.main,
								},
							}}
							open
						>
							{drawer}
						</Drawer>
					</Box>
					<Box
						component="main"
						sx={{ flexGrow: 1, mt: 8, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
					>
						{/* dashboard content changes here*/}
						{children}
					</Box>
				</Box>
			</>
		</div>
	);
};

export default AdminLayout;
