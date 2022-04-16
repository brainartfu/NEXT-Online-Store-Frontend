import { useState } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import { ColorShoppingBagSvg } from "../../icons";
import RatingPopup from "../../product/ratingsAndReviews/RatingPopup";
import { ProductCircularColor } from "../../styledComponents";
import { FlexStack, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";

const OrderDetails = () => {
	const [isRatingOpen, setIsRatingOpen] = useState(false);

	const handleTogglePopup = (value: boolean) => {
		setIsRatingOpen(value);
	};

	return (
		<Box>
			<TitleFlexStack>
				<ColorShoppingBagSvg />
				<TitleText>My Orders</TitleText>
			</TitleFlexStack>

			<SettingsDivider />

			<div>
				<Typography fontWeight="bold" gutterBottom>
					Order Details:
				</Typography>
				<Typography fontWeight="medium">Total (2 Items) $100</Typography>
			</div>

			{[...Array(2)].map((item, idx) => (
				<Box
					key={idx}
					sx={{
						p: 2.5,
						my: 2.5,
						gap: 2.5,
						width: "100%",
						display: "flex",
						alignItems: "center",
						bgcolor: "common.white",
						flexDirection: { xs: "column", sm: "row" },
					}}
				>
					<Box sx={{ position: "relative", width: 200, textAlign: "center" }}>
						<Image src={IMAGES.WhiteTshirtImg} alt="Product" height={185} width={134} placeholder="blur" />
					</Box>

					<Box width="100%">
						<FlexStack sx={{ flexWrap: "wrap", mb: 2 }}>
							<Typography fontWeight="600">White Cotton Sweatshirt </Typography>
							<Typography fontWeight="400" fontSize={18}>
								$50.00
							</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Quantity</Typography>
							<Typography variant="body2">1</Typography>
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Color</Typography>
							<ProductCircularColor color="#ddd" />
						</FlexStack>
						<FlexStack>
							<Typography variant="body2">Size</Typography>
							<Typography variant="body2">M</Typography>
						</FlexStack>
						<Box textAlign="right">
							<Button
								onClick={() => handleTogglePopup(true)}
								sx={{ px: 2.5, py: 1, height: 30 }}
								variant="outlined"
								color="secondary"
							>
								Review
							</Button>
						</Box>
					</Box>
				</Box>
			))}

			{/* subtotal */}
			<div>
				<Box>
					<FlexStack>
						<Typography fontWeight="500">Subtotal</Typography>
						<Typography fontWeight="600">$100.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography fontWeight="500">USPS Priority 2-3 Days</Typography>
						<Typography fontWeight="600">$5.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography fontWeight="500">Tax</Typography>
						<Typography fontWeight="600">$0.00</Typography>
					</FlexStack>
				</Box>
				<Divider sx={{ mt: 2.5, background: "#EEEEEE" }} />
				<FlexStack>
					<Typography fontWeight="bold">Total</Typography>
					<Typography fontWeight="bold">$150</Typography>
				</FlexStack>
			</div>

			{/* popup - RatingsAndReviews */}
			<RatingPopup isOpen={isRatingOpen} handleTogglePopup={handleTogglePopup} />
		</Box>
	);
};

export default OrderDetails;
