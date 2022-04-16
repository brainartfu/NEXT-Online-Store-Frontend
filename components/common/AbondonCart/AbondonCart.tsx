import { useState } from "react";
import Image from "next/image";
import { Button, Typography, Box, IconButton, SelectChangeEvent } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ColorPalette from "../ColorPalette";
import { IMAGES } from "../../../uiElements";
import ProductSizeSelect from "../ProductSizeSelect";
import { CloseIcon } from "../../../uiElements/icons";
import { ROUTING_TREE } from "../../../constants/siteUrls";
import { ArrowLeftIconButton, ArrowRightIconButton, Link } from "../../ui";
import { CartDivider, ProductCircularColor, SmallText } from "../../styledComponents";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/types";

const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};

// interface IProps {
// 	isOpen: boolean;
// 	handleToggle: (isToggle: boolean) => void;
// }

const AbondonCart = () => {
	const color = useAppSelector((state: RootState) => state.color);

	const [size, setSize] = useState("10");
	const [isOpen, setIsOpen] = useState(true);
	const [quantity, setQuantity] = useState(1);
	const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleToggle = (isToggle: boolean) => {
		setIsOpen(isToggle);
	};

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};
	console.log(size);

	const handleQuantityIncrementClick = () => {
		setQuantity(quantity + 1);
	};
	const handleQuantityDecrementClick = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		} else {
			return;
		}
	};

	// color palette handler
	const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPaletteAnchorElAnchorEl(event.currentTarget);
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => handleToggle(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 700 } }}
		>
			<Box sx={{ position: "absolute", top: 8, right: 8 }}>
				<IconButton color="secondary" size="small" onClick={() => handleToggle(false)}>
					<CloseIcon />
				</IconButton>
			</Box>
			<DialogContent>
				<Typography sx={{ mb: 1.25 }} fontWeight={600}>
					Welcome back!
				</Typography>
				<SmallText sx={{ mb: 1.25 }} fontWeight={400}>
					We have saved your cart for you.
				</SmallText>
				<CartDivider sx={{ mt: 3.5 }} />

				{[...Array(2)].map((item, idx) => (
					<Box
						key={idx}
						sx={{
							pt: 4,
							display: "flex",
							gap: 2,
							alignItems: "flex-start",
							borderBottom: "1px solid #CACACA",
							"&:last-child": { borderBottom: "none" },
						}}
					>
						<Image
							src={IMAGES.WhiteTshirtImg}
							alt="Product"
							height={65}
							width={47}
							objectFit="cover"
							placeholder="blur"
						/>
						<Box>
							<Box sx={{ mb: 0.6, gap: 2, ...styles }}>
								<Typography variant="body2" sx={{ fontWeight: 600 }}>
									White Cotton Sweatshirt
								</Typography>
								<SmallText>${"50.00"}</SmallText>
							</Box>
							<Box sx={{ mb: 0.6, display: "flex", alignItems: "center" }}>
								<SmallText sx={{ flex: 1 }}>Quantity</SmallText>
								<Box component="span" sx={{ display: "flex", alignItems: "center", mr: -1 }}>
									<ArrowLeftIconButton color="#292929" onClick={handleQuantityDecrementClick} />
									<Typography variant="body2" fontWeight="500">
										{quantity}
									</Typography>
									<ArrowRightIconButton color="#292929" onClick={handleQuantityIncrementClick} />
								</Box>
							</Box>
							<Box sx={{ mb: 0.6, ...styles }}>
								<SmallText>Color</SmallText>
								{/* <ProductCircularColor color="#FFDB00" className="color-circle">
									<ColorPalette />
								</ProductCircularColor> */}
								<ProductCircularColor
									// aria-describedby={id}
									color={color.colorInHex}
									className="color-circle"
									onClick={handleOpenColorPalette}
								/>
								<ColorPalette
									anchorEl={colorPaletteAnchorEl}
									setAnchorElAnchorEl={setColorPaletteAnchorElAnchorEl}
								/>
							</Box>
							<Box sx={{ mb: 0.6, mr: -0.7, ...styles }}>
								<SmallText>Size</SmallText>
								<Box>
									<ProductSizeSelect
										value={size}
										handleSizeChange={handleSizeChange}
										iconColor="#292929"
										outerFontColor="#292929"
										outerFontSize={12}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
				))}

				<Box>
					<CartDivider />
					<Box sx={{ my: 1.25, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Typography variant="body2" fontWeight="500">
							Subtotal
						</Typography>
						<Typography fontWeight="500" fontSize={12}>
							${(50).toFixed(2)}
						</Typography>
					</Box>
					<CartDivider />
				</Box>
			</DialogContent>

			<Box px={3} py={2.5} sx={{ "& .MuiButton-root": { my: 1.25 } }}>
				<Link href={ROUTING_TREE.CART}>
					<Button fullWidth color="secondary" variant="contained">
						View Cart
					</Button>
				</Link>
				<Link href={ROUTING_TREE.CHECKOUT}>
					<Button fullWidth color="primary" variant="contained">
						Checkout
					</Button>
				</Link>
			</Box>
		</Dialog>
	);
};

export default AbondonCart;
