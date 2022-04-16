import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import { ColorShoppingBagSvg } from "../../icons";
import { StatusText } from "../../styledComponents";
import { FlexStack, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { useRouter } from "next/router";
import { useState } from "react";
import { MyOrdersSkeleton } from "../../skeleton";

const MyOrders = () => {
	const router = useRouter();

	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1500);

	return (
		<Box>
			<TitleFlexStack>
				<ColorShoppingBagSvg />
				<TitleText>My Orders</TitleText>
			</TitleFlexStack>

			<SettingsDivider />
			{isLoading ? (
				<MyOrdersSkeleton />
			) : (
				<>
					{[...Array(3)].map((item, idx) => (
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
								<Image
									src={IMAGES.WhiteTshirtImg}
									alt="Product"
									height={185}
									width={134}
									placeholder="blur"
								/>
							</Box>

							<Box width="100%">
								<FlexStack sx={{ flexWrap: "wrap", mb: 2 }}>
									<Typography fontWeight="600">White Cotton Sweatshirt </Typography>
									<Button
										onClick={() => router.push("order-details")}
										variant="outlined"
										color="secondary"
									>
										View Order
									</Button>
								</FlexStack>
								<FlexStack>
									<Typography variant="body2">Quantity</Typography>
									<Typography variant="body2">1</Typography>
								</FlexStack>
								<FlexStack>
									<Typography variant="body2">Order Number</Typography>
									<Typography variant="body2">1234546</Typography>
								</FlexStack>
								<FlexStack>
									<Typography variant="body2">Shipped Date</Typography>
									<Typography variant="body2">22 March 2022</Typography>
								</FlexStack>
								<FlexStack>
									<Typography variant="body2">Total Amount</Typography>
									<Typography variant="body2">$300.00</Typography>
								</FlexStack>
								<FlexStack>
									<Typography variant="body2">Status</Typography>
									<StatusText status="delivered" variant="body2">
										Delivered
									</StatusText>
								</FlexStack>
							</Box>
						</Box>
					))}
				</>
			)}
		</Box>
	);
};

export default MyOrders;
