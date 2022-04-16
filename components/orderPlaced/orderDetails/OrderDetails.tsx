// import { useState } from "react";
import { Container, Box, Typography, Divider, Button } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import { IMAGES } from "../../../uiElements";
import { HeadingText, ProductCircularColor, SmallText } from "../../styledComponents";
// import { ColorPalette } from "../../common";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/types";
import { Link } from "../../ui";

const FlexStack = styled(Box)((theme) => ({
	display: "flex",
	gap: "20px",
	alignItems: "center",
	justifyContent: "space-between",
}));

const Text = styled(Typography)((theme) => ({
	fontWeight: 500,
}));

const OrderDetails = () => {
	// const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);
	const color = useAppSelector((state: RootState) => state.color);

	// color palette handler
	// const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	setColorPaletteAnchorElAnchorEl(event.currentTarget);
	// };

	return (
		<Box>
			<Container maxWidth="md">
				<Typography sx={{ fontWeight: 600, mb: 1.3 }}>Order Details:</Typography>
				<SmallText>Total (2 Items) $100</SmallText>
				{/* product box with details */}

				{[...Array(2)].map((item, idx) => (
					<div key={idx}>
						<Box sx={{ my: 2.5, display: "flex", gap: 3.7 }}>
							<Image
								src={IMAGES.WhiteTshirtImg}
								alt="product-image"
								height={196}
								width={154}
								placeholder="blur"
							/>
							<Box sx={{ width: "100%" }}>
								<FlexStack my={2.5}>
									<HeadingText>White Cotton Sweatshirt</HeadingText>
									<Typography variant="h6" sx={{ fontWeight: 400 }}>
										$50.00
									</Typography>
								</FlexStack>
								<FlexStack my={2.5}>
									<Text variant="body2" color="text.secondary">
										Quantity
									</Text>
									<Typography variant="body2">1</Typography>
								</FlexStack>
								<FlexStack my={2.5}>
									<Text variant="body2" color="text.secondary">
										Color
									</Text>
									{/* <ProductCircularColor color="#FFDB00" className="color-circle">
								<ColorPalette />
							</ProductCircularColor> */}
									<ProductCircularColor
										color={color.colorInHex}
										className="color-circle"
										// onClick={handleOpenColorPalette}
									/>
								</FlexStack>
								<FlexStack my={2.5}>
									<Text variant="body2" color="text.secondary">
										Size
									</Text>
									<Text variant="body2">M</Text>
								</FlexStack>
							</Box>
						</Box>
						<Divider sx={{ mt: 2.5, background: "#EEEEEE" }} />
					</div>
				))}

				{/* subtotal */}
				<Box maxWidth="sm" sx={{ ml: "auto" }}>
					<Box>
						<FlexStack my={2.5}>
							<Typography fontWeight="500">Subtotal</Typography>
							<Typography fontWeight="600">$100.00</Typography>
						</FlexStack>
						<FlexStack my={2.5}>
							<Typography fontWeight="500">USPS Priority 2-3 Days</Typography>
							<Typography fontWeight="600">$5.00</Typography>
						</FlexStack>
						<FlexStack my={2.5}>
							<Typography fontWeight="500">Tax</Typography>
							<Typography fontWeight="600">$0.00</Typography>
						</FlexStack>
					</Box>
					<Divider sx={{ mt: 2.5, background: "#EEEEEE" }} />
					<FlexStack my={2.5}>
						<Typography fontWeight="bold">Total</Typography>
						<Typography fontWeight="bold">$150</Typography>
					</FlexStack>

					<Box sx={{ textAlign: "center", mt: 5 }}>
						<Link href="/">
							<Button variant="contained" color="secondary" size="large">
								Continue Shopping
							</Button>
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default OrderDetails;
