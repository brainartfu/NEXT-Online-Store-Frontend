import { styled } from "@mui/system";
import { Box, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../../../../uiElements";
import { ProductCircularColor } from "../../../../../styledComponents";
import Footer from "./footer";
import Header from "./header";

const FlexStack = styled("div")({
	display: "flex",
	margin: "3px 0",
	justifyContent: "space-between",
});

const TextSamll = styled(Typography)({
	fontSize: 10,
});

const OrderPlacedEmail = () => {
	return (
		<Box sx={{ bgcolor: "background.paper", maxWidth: 350 }}>
			<Header />
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography variant="body2">
					Hello
					<strong> John Doe 👋</strong>
				</Typography>

				<TextSamll sx={{ mt: 1.125, fontSize: 10 }}>
					Thank you for your purchase! We’ve received your order, we will notify you when it has been sent.
				</TextSamll>

				{/* product */}
				<Box>
					<Typography variant="body2" fontWeight="medium" sx={{ my: 1.25 }}>
						Order Details:
					</Typography>

					<Box sx={{ display: "flex", gap: 3 }}>
						<div>
							<Image
								src={IMAGES.WhiteTshirtImg}
								alt="product"
								height={75}
								width={65}
								objectFit="cover"
								placeholder="blur"
							/>
						</div>
						<Box sx={{ width: "100%" }}>
							<FlexStack>
								<TextSamll fontWeight="medium" variant="body2">
									White Cotton Sweatshirt
								</TextSamll>
								<TextSamll sx={{ fontSize: 10 }}>$50.00</TextSamll>
							</FlexStack>
							<FlexStack>
								<TextSamll sx={{ fontSize: 10 }} color="text.secondary">
									Quantity
								</TextSamll>
								<TextSamll sx={{ fontSize: 10 }} color="text.secondary">
									1
								</TextSamll>
							</FlexStack>
							<FlexStack>
								<TextSamll sx={{ fontSize: 10 }} color="text.secondary">
									Color
								</TextSamll>
								<ProductCircularColor color="#ddd" />
							</FlexStack>
							<FlexStack>
								<TextSamll sx={{ fontSize: 10 }} color="text.secondary">
									Size
								</TextSamll>
								<TextSamll sx={{ fontSize: 10 }} color="text.secondary">
									M
								</TextSamll>
							</FlexStack>
						</Box>
					</Box>
				</Box>

				{/* subtotal */}
				<Box>
					<FlexStack>
						<TextSamll>Subtotal</TextSamll>
						<TextSamll fontWeight="600">$50.00</TextSamll>
					</FlexStack>
					<FlexStack>
						<TextSamll>USPS Priority 2-3 Days</TextSamll>
						<TextSamll fontWeight="600">$5.00</TextSamll>
					</FlexStack>
					<FlexStack>
						<TextSamll>Tax</TextSamll>
						<TextSamll fontWeight="600">$0.00</TextSamll>
					</FlexStack>

					<Divider sx={{ my: 0.5, borderColor: "#EEEEEE" }} />

					<FlexStack>
						<TextSamll>
							<strong>Total</strong>
						</TextSamll>
						<TextSamll fontWeight="600">$2,250</TextSamll>
					</FlexStack>
				</Box>

				<Box sx={{ textAlign: "center" }}>
					<Button variant="contained" sx={{ my: 0.5, height: 25, fontSize: 10 }}>
						Shop Again
					</Button>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default OrderPlacedEmail;
