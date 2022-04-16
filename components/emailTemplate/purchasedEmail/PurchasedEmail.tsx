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

const PurchasedEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					Hello
					<strong> John Doe 👋</strong>
				</Typography>

				<Typography sx={{ mt: 2 }}>Last week you purchased the following order</Typography>

				<Divider sx={{ my: 2.5, borderColor: "#EEEEEE" }} />

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

				<Typography sx={{ letterSpacing: "0.2px" }}>
					We will be glad if you tell us about your experience with us and our products.
				</Typography>

				<Box sx={{ textAlign: "center" }}>
					<Button
						size="large"
						variant="contained"
						sx={{ my: 2.5, minWidth: 228, minHeight: 56, fontSize: 16, fontWeight: 500 }}
					>
						Rate Item
					</Button>
				</Box>
			</Box>
		</EmailLayout>
	);
};

export default PurchasedEmail;
