import { styled } from "@mui/system";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import EmailLayout from "../common/layout";
import { ProductCircularColor } from "../../styledComponents";
import { BagSvg } from "../../icons";
import { ProductCard } from "../../common";
import { productData } from "../../cart/alsoLikeProducts/data";

const FlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	margin: "7px 0",
	justifyContent: "space-between",
});

const AbondonCartEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<FlexStack>
					<Typography fontWeight="600">Thanks for stopping by Hoomey</Typography>
					<Button variant="outlined" endIcon={<BagSvg />}>
						<Box component="span" sx={{ color: "#292929", fontWeight: 600 }}>
							2 items
						</Box>
					</Button>
				</FlexStack>

				<Typography sx={{ my: 3, letterSpacing: "0.2px" }}>
					Return to your shopping cart now and get free shipping on all items currently in your cart!
				</Typography>

				<Divider sx={{ my: 2, borderColor: "#EEEEEE" }} />

				{/* product */}
				<Box>
					{[...Array(2)].map((item, idx) => (
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

					{/* action area */}
					<Box
						sx={{
							display: { xs: "block", sm: "flex" },
							gap: 2.25,
							"& .MuiButton-root": { my: { xs: 1, sm: 0 } },
						}}
					>
						<Button fullWidth color="secondary" variant="outlined" size="large">
							Edit Cart
						</Button>
						<Button fullWidth color="secondary" size="large" variant="contained">
							Checkout
						</Button>
					</Box>
				</Box>
			</Box>

			{/* also enjoy product */}
			<Box sx={{ mt: 2.5, border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography sx={{ my: 2.5 }} variant="h6">
					You may also enjoy
				</Typography>

				<Grid container spacing={2}>
					{productData.map((pd) => (
						<Grid key={pd.id} item xs={12} sm={6} md={4}>
							<ProductCard product={pd} />
						</Grid>
					))}
				</Grid>
			</Box>
		</EmailLayout>
	);
};

export default AbondonCartEmail;
