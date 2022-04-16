import { CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { COLORS } from "../../../../../theme/colors";
import { IMAGES } from "../../../../../uiElements";
import { AppDivider, ProductCircularColor } from "../../../../styledComponents";
import { StyledCard } from "../../../components/styledComponents";

const FlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: 2.5,
	margin: "16px 0",
});

const FontMediumBold = styled(Typography)({
	fontWeight: 500,
});
const FontSemiBold = styled(Typography)({
	fontWeight: 600,
});

const Checkout = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ mb: 2.5 }} fontWeight={600} fontSize={18}>
					Checkout details
				</Typography>

				{/* product view */}
				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					{/* product image */}

					<Image
						src={IMAGES.WhiteTshirtImg}
						alt="product name"
						height={196}
						width={154}
						objectFit="cover"
						placeholder="blur"
					/>

					{/* product details twice content */}
					<Box sx={{ width: "100%" }}>
						<FlexStack>
							<Typography fontWeight={600} fontSize={18}>
								White Cotton Sweatshirt{" "}
							</Typography>
							<Typography fontWeight={500} fontSize={18}>
								$50.00
							</Typography>
						</FlexStack>
						<FlexStack>
							<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
								Quantity
							</Typography>
							<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
								1
							</Typography>
						</FlexStack>
						<FlexStack>
							<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
								Color
							</Typography>
							<ProductCircularColor color={"#EBEBEB"} className="color-circle" />
						</FlexStack>
						<FlexStack>
							<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
								Size
							</Typography>
							<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
								M
							</Typography>
						</FlexStack>
					</Box>
				</Box>

				<AppDivider sx={{ my: 2.5 }} />

				{/* calculations */}
				<Box>
					<FlexStack>
						<FontMediumBold>Subtotal</FontMediumBold>
						<Typography>1 Item</Typography>
						<FontSemiBold>$100.00</FontSemiBold>
					</FlexStack>
					<FlexStack>
						<FontMediumBold>Shipping</FontMediumBold>
						<Typography>0.0 KG</Typography>
						<FontSemiBold>$4.00</FontSemiBold>
					</FlexStack>
					<FlexStack>
						<FontMediumBold>Tax</FontMediumBold>
						<FontSemiBold>$0.00</FontSemiBold>
					</FlexStack>
					<FlexStack>
						<FontMediumBold>Total</FontMediumBold>
						<FontSemiBold>$104.00</FontSemiBold>
					</FlexStack>
				</Box>

				<AppDivider sx={{ my: 2.5 }} />

				<FlexStack>
					<FontMediumBold>To be paid by customer</FontMediumBold>
					<FontSemiBold>$104.00</FontSemiBold>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default Checkout;
