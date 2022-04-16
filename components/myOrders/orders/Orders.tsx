import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { StatusText } from "../../styledComponents";
import { FlexStack } from "../styledComponents";
import { useStyles } from "./styled";

const styles = {
	scrollbar: {
		"&::-webkit-scrollbar": {
			height: 5,
		},
		"&::-webkit-scrollbar-track": {
			background: "#fff",
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#e2e2e2",
			borderRadius: 2,
		},
	},
};

const Orders = () => {
	const classes = useStyles();

	return (
		<Box mb={9.1}>
			<Container maxWidth="lg">
				<Typography sx={{ mb: 3 }} fontWeight="medium" variant="h6" textAlign="center">
					My Orders
				</Typography>

				{/* order card */}
				<>
					<Box sx={{ background: "#FBFBFB", p: 4 }}>
						{/* order - product */}
						<Grid container spacing={5}>
							<Grid item xs={12} md={7}>
								<Box className={classes.productSection} sx={{ ...styles.scrollbar }}>
									{[...Array(2)].map((item, _idx) => (
										// product
										<Box key={_idx} component="div" sx={{ minWidth: 199 }}>
											<Box
												sx={{
													background: COLORS.PRODUCT_CARD_BG,
													display: "inline-block",
													height: 250,
													mb: 2,
												}}
											>
												<Image
													src={IMAGES.WhiteTshirtImg}
													alt="Product"
													height={250}
													width={199}
													objectFit="cover"
													placeholder="blur"
												/>
											</Box>
											<Typography fontWeight="600">White Cotton Sweatshirt </Typography>
											<Typography sx={{ display: "flex", justifyContent: "space-between" }}>
												<span>Quantity</span>
												<span>2</span>
											</Typography>
										</Box>
									))}
								</Box>
							</Grid>

							{/* order history */}
							<Grid item xs={12} md={5}>
								<Box sx={{ mt: { xs: 5, sm: 0 } }}>
									<Box textAlign="right" mb={4}>
										<Button variant="outlined" color="secondary">
											View Order
										</Button>
									</Box>
									<FlexStack>
										<Typography className={classes.boldText}>Order Number</Typography>
										<Typography className={classes.lightText}>Order Number</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Shipped Date</Typography>
										<Typography className={classes.lightText}>22 March 2022</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Total Amount</Typography>
										<Typography className={classes.lightText}>$300.00</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Status</Typography>
										<StatusText className={classes.lightText} status="delivered">
											Delivered
										</StatusText>
									</FlexStack>
								</Box>
							</Grid>
						</Grid>
					</Box>
					<Divider sx={{ bgcolor: "#EEEEEE", my: 3.8 }} />
				</>

				{/* order card */}
				<>
					<Box sx={{ background: "#FBFBFB", p: 4 }}>
						{/* order - product */}
						<Grid container spacing={5}>
							<Grid item xs={12} md={7}>
								<Box className={classes.productSection} sx={{ ...styles.scrollbar }}>
									{[...Array(4)].map((item, _idx) => (
										// product
										<Box key={_idx} component="div" sx={{ minWidth: 199 }}>
											<Box
												sx={{
													background: COLORS.PRODUCT_CARD_BG,
													display: "inline-block",
													height: 250,
													mb: 2,
												}}
											>
												<Image
													src={IMAGES.WhiteTshirtImg}
													alt="Product"
													height={250}
													width={199}
													objectFit="cover"
													placeholder="blur"
												/>
											</Box>
											<Typography fontWeight="600">White Cotton Sweatshirt </Typography>
											<Typography sx={{ display: "flex", justifyContent: "space-between" }}>
												<span>Quantity</span>
												<span>2</span>
											</Typography>
										</Box>
									))}
								</Box>
							</Grid>

							{/* order history */}
							<Grid item xs={12} md={5}>
								<Box sx={{ mt: { xs: 5, sm: 0 } }}>
									<Box textAlign="right" mb={4}>
										<Button variant="outlined" color="secondary">
											Track Order
										</Button>
									</Box>
									<FlexStack>
										<Typography className={classes.boldText}>Order Number</Typography>
										<Typography className={classes.lightText}>Order Number</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Shipped Date</Typography>
										<Typography className={classes.lightText}>22 March 2022</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Total Amount</Typography>
										<Typography className={classes.lightText}>$300.00</Typography>
									</FlexStack>
									<FlexStack>
										<Typography className={classes.boldText}>Status</Typography>
										<StatusText className={classes.lightText} status="shipment">
											In Shipment
										</StatusText>
									</FlexStack>
								</Box>
							</Grid>
						</Grid>
					</Box>
					<Divider sx={{ bgcolor: "#EEEEEE", my: 3.8 }} />
				</>
			</Container>
		</Box>
	);
};

export default Orders;
