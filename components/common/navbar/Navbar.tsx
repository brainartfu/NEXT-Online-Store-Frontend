import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Badge, Box, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { paperPropsStyles, useStyles } from "./styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import CartDetails from "./CartDetails";
import CartButton from "../../ui/CartButton";
import { BagSvg, DarkBagSvg, DarkPersonSvg, NavLogoSvg, OpenSvg, TrackSvg } from "../../icons";
import Link from "../../ui/Link";

// import Tooltip from "@mui/material/Tooltip";

// select
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// icons
import { FavoriteBorderIcon, PersonOutlineIcon, SearchIcon } from "../../../uiElements/icons";
import AppDrawer from "../AppDrawer";
import HoverMenu from "./HoverMenu";
import SearchDropdwon from "../SearchDropdwon";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import TrackOrder from "../TrackOrder";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/types";
import NotFound from "../NotFound";
import TopHeader from "../TopHeader";

const menuItems = [
	{ currency: "USD", value: 1 },
	{ currency: "SAR", value: 2 },
	{ currency: "CAD", value: 3 },
	{ currency: "AUD", value: 4 },
	{ currency: "GBP", value: 5 },
	{ currency: "EUR", value: 6 },
	{ currency: "JPY", value: 7 },
];
const pages = [
	{ name: "Women", link: "/women" },
	{ name: "Kids", link: "/kids" },
];
// const settings = ["Profile", "Account"];

const Navbar: FC = () => {
	const classes = useStyles();
	const router = useRouter();

	const cart = useAppSelector((state: RootState) => state.cart);

	const [currency, setCurrency] = useState("1");
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
	const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
	const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
	const [anchorElUserDropdown, setAnchorElUserDropdown] = useState<null | HTMLElement>(null);

	const handleCurrencyChange = (event: SelectChangeEvent) => {
		setCurrency(event.target.value as string);
	};

	// cart drawer view
	const toggleCartDrawer = (open: boolean) => {
		setIsCartDrawerOpen(open);
	};
	// nav drawer view
	const toggleNavDrawer = (open: boolean) => {
		setIsNavDrawerOpen(open);
	};

	// handle search
	const handleSearchClose = () => {
		setIsOpenSearch(false);
	};
	const handleSearchToggle = () => {
		setIsOpenSearch(!isOpenSearch);
	};

	// handle user dropdown
	const isUserDropdownOpen = Boolean(anchorElUserDropdown);

	const handleUserDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUserDropdown(event.currentTarget);
	};

	const handleUserDropdownClose = () => {
		setAnchorElUserDropdown(null);
	};

	const handleTogglePopup = (boolean: boolean) => {
		setIsTrackOrderOpen(boolean);
	};

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleMenu = () => {
		setIsOpenMenu((prev) => !prev);
	};

	return (
		<>
			<AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white", color: "#727376" }}>
				<TopHeader />
				<Container maxWidth="lg">
					<Toolbar disableGutters>
						{/* menu for large device */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{/* hover menu*/}
							<Box component="span" className={classes.dropdown}>
								<Link href="/men">
									<Button
										sx={{
											fontFamily: "Euclid Circular A",
											color: "#727376",
											my: 2,
											display: "block",
										}}
									>
										Men
									</Button>
								</Link>
								<Box className="dropdownContent">
									<HoverMenu />
								</Box>
							</Box>

							{pages.map((page) => (
								<Link href={page.link} key={page.name}>
									<Button
										sx={{
											fontFamily: "Euclid Circular A",
											color: "#727376",
											my: 2,
											display: "block",
										}}
									>
										{page.name}
									</Button>
								</Link>
							))}
						</Box>

						{/* logo */}
						<Box sx={{ mr: 2, display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
							<Link href="/">
								<NavLogoSvg />
							</Link>
						</Box>
						<Box sx={{ mr: 2, display: { xs: "flex", sm: "none" }, flexGrow: 1 }}>
							<Link href="/">
								<NavLogoSvg width={120} />
							</Link>
						</Box>

						{/* right side menu */}
						<Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
							<Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.25, sm: 2.5 } }}>
								<IconButton onClick={handleSearchToggle} color="primary" size="small">
									<SearchIcon />
								</IconButton>

								<IconButton
									onClick={handleUserDropdownClick}
									color="primary"
									size="small"
									aria-controls={isUserDropdownOpen ? "settings-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={isUserDropdownOpen ? "true" : undefined}
								>
									<PersonOutlineIcon />
								</IconButton>

								{/* user dropdown menu */}
								<Menu
									anchorEl={anchorElUserDropdown}
									id="settings-menu"
									open={isUserDropdownOpen}
									onClose={handleUserDropdownClose}
									PaperProps={{
										elevation: 0,
										sx: { ...paperPropsStyles },
									}}
									transformOrigin={{
										horizontal: "right",
										vertical: "top",
									}}
									anchorOrigin={{
										horizontal: "right",
										vertical: "bottom",
									}}
								>
									<MenuItem>
										<Link href={ROUTING_TREE.ACCOUNT_SETTINGS.ROOT}>
											<ListItemIcon>
												<DarkPersonSvg />
											</ListItemIcon>
											My Profile
										</Link>
									</MenuItem>
									<MenuItem>
										<Link
											href={
												ROUTING_TREE.ACCOUNT_SETTINGS.ROOT +
												ROUTING_TREE.ACCOUNT_SETTINGS.MY_ORDERS
											}
										>
											<ListItemIcon>
												<DarkBagSvg />
											</ListItemIcon>
											My Orders
										</Link>
									</MenuItem>
									<MenuItem onClick={() => handleTogglePopup(true)}>
										<ListItemIcon>
											<TrackSvg />
										</ListItemIcon>
										Track Order
									</MenuItem>
									<MenuItem>
										<ListItemIcon>
											<OpenSvg />
										</ListItemIcon>
										Sign Out
									</MenuItem>
								</Menu>

								<IconButton
									onClick={() => router.push(ROUTING_TREE.FAVOURITES)}
									color="primary"
									size="small"
								>
									<FavoriteBorderIcon />
								</IconButton>

								{/* currency - dropdown */}
								<Box sx={{ minWidth: 90, display: { xs: "none", sm: "block" } }}>
									<FormControl className={classes.currencySelect} fullWidth size="small">
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={currency}
											onChange={handleCurrencyChange}
										>
											{menuItems.map((item) => (
												<MenuItem
													key={item.value}
													sx={{ fontFamily: "Euclid Circular A" }}
													value={item.value}
												>
													{item.currency}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>

								{/* cart item count - show / badge */}
								<Box sx={{ display: { xs: "none", sm: "block" } }}>
									<CartButton
										badgeContent={cart.products.length}
										onClick={() => toggleCartDrawer(true)}
									/>
								</Box>

								<Box
									sx={{
										display: { xs: "block", sm: "none" },
									}}
								>
									<Badge
										onClick={() => toggleCartDrawer(true)}
										badgeContent={cart.products.length}
										color="secondary"
									>
										<IconButton size="small">
											<BagSvg height={22} />
										</IconButton>
									</Badge>
								</Box>
							</Box>
						</Box>

						<Box sx={{ ml: 2, flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="secondary"
								onClick={() => toggleNavDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />
			<Toolbar sx={{ minHeight: "38px !important" }} />

			{/* card details - drawer */}
			<AppDrawer isDrawerOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
				{cart.products.length ? (
					<CartDetails />
				) : (
					<Box p={5}>
						<NotFound message="No products in the cart." icon={<BagSvg color="#fff" />} />
					</Box>
				)}
			</AppDrawer>

			{/* nav - drawer - for small device*/}
			<AppDrawer isDrawerOpen={isNavDrawerOpen} toggleDrawer={toggleNavDrawer}>
				{/* currency - dropdown */}
				<Box sx={{ minWidth: 90, mb: 6 }}>
					<FormControl className={classes.currencySelect} fullWidth size="small">
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={currency}
							onChange={handleCurrencyChange}
						>
							{menuItems.map((item) => (
								<MenuItem key={item.value} sx={{ fontFamily: "Euclid Circular A" }} value={item.value}>
									{item.currency}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>

				<List
					sx={{
						"& .MuiListItemButton-root": {
							my: 3,
						},
					}}
				>
					<Link href="/men">
						<ListItem disablePadding>
							<ListItemButton onClick={handleMenu}>
								<ListItemText sx={{ textAlign: "center" }} primary={"Men"} />
							</ListItemButton>
						</ListItem>
					</Link>

					{/* dropdown menu */}
					<Collapse in={isOpenMenu}>
						<List
							sx={{
								borderRadius: 0.5,
								border: "1px solid #5B5B5B",
								"& .MuiListItemButton-root": {
									my: 0,
								},
							}}
						>
							{[
								"Clothing",
								"Shoes",
								"Accessories",
								"Face + Body",
								"Topman",
								"Back in Stock",
								"Outlet",
								"Trending",
							].map((item, idx) => (
								<ListItem key={idx} disablePadding>
									<ListItemButton>
										<ListItemText primary={item} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Collapse>

					{pages.map((page, index) => (
						<Link key={index} href={page.link}>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemText sx={{ textAlign: "center" }} primary={page.name} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</AppDrawer>

			{/* search dropdown - section */}
			<Box
				sx={{
					"& .MuiBackdrop-root": {
						width: "100%",
						pt: 10,
						alignItems: "flex-start",
					},
				}}
			>
				<Dialog
					fullWidth
					maxWidth="lg"
					sx={{
						"& .MuiDialog-container": { pt: 10, alignItems: "flex-start" },
						"& .MuiPaper-root": {
							//  width: "auto",
							boxShadow: 0,
						},
					}}
					open={isOpenSearch}
					onClose={handleSearchClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<SearchDropdwon />
				</Dialog>
			</Box>
			{/* track order - popup */}
			<TrackOrder isOpen={isTrackOrderOpen} handleToggle={handleTogglePopup} />
		</>
	);
};

export default Navbar;
