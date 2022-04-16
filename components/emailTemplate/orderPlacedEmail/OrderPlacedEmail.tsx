import { styled } from "@mui/system";
import { Box, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import EmailLayout from "../common/layout";
import { ProductCircularColor } from "../../styledComponents";

const FlexStack = styled("div")({
	display: "flex",
	margin: "7px 0",
	justifyContent: "space-between",
});

const OrderPlacedEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					Hello
					<strong> John Doe 👋</strong>
				</Typography>

				<Typography sx={{ mt: 2 }}>
					Thank you for your purchase! We’ve received your order, we will notify you when it has been sent.
				</Typography>

				{/* product */}
				<Box>
					<Typography fontWeight="600" sx={{ my: 3 }}>
						Order Details:
					</Typography>

					{[...Array(1)].map((item, idx) => (
						<Box key={idx}>
							<Box sx={{ display: "flex", gap: 3 }}>
								<Image
									src={IMAGES.WhiteTshirtImg}
									alt="product"
									height={65}
									width={65}
									objectFit="cover"
									placeholder="blur"
								/>
								<Box sx={{ width: "100%" }}>
									<FlexStack>
										<Typography fontWeight="600">White Cotton Sweatshirt</Typography>
										<Typography>$50.00</Typography>
									</FlexStack>
									<FlexStack>
										<Typography color="text.secondary">Quantity</Typography>
										<Typography color="text.secondary">1</Typography>
									</FlexStack>
									<FlexStack>
										<Typography color="text.secondary">Color</Typography>
										<ProductCircularColor color="#ddd" />
									</FlexStack>
									<FlexStack>
										<Typography color="text.secondary">Size</Typography>
										<Typography color="text.secondary">M</Typography>
									</FlexStack>
								</Box>
							</Box>
							<Divider sx={{ my: 2, borderColor: "#EEEEEE" }} />
						</Box>
					))}
				</Box>

				{/* subtotal */}
				<Box>
					<FlexStack>
						<Typography>Subtotal</Typography>
						<Typography fontWeight="600">$50.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography>USPS Priority 2-3 Days</Typography>
						<Typography fontWeight="600">$5.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography>Tax</Typography>
						<Typography fontWeight="600">$0.00</Typography>
					</FlexStack>

					<Divider sx={{ my: 2, borderColor: "#EEEEEE" }} />

					<FlexStack>
						<Typography>
							<strong>Total</strong>
						</Typography>
						<Typography fontWeight="600">$2,250</Typography>
					</FlexStack>
				</Box>

				<Box sx={{ textAlign: "center" }}>
					<Button
						size="large"
						variant="contained"
						sx={{ my: 2.5, minWidth: 228, minHeight: 56, fontSize: 16, fontWeight: 500 }}
					>
						Shop Again
					</Button>
				</Box>
			</Box>
		</EmailLayout>
	);
};

export default OrderPlacedEmail;
