import { FC, useState } from "react";
import { Grid, Box, Container, Skeleton } from "@mui/material";
import Item from "./Item";
import CartTotals from "./CartTotals";

const ShoppingCart: FC = () => {
	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 2000);

	return (
		<Box mb={9.1}>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12} md={8}>
						{isLoading ? (
							<div>
								{/* skeleton */}
								<Box sx={{ display: "flex", gap: 2.5 }}>
									<Skeleton variant="rectangular" sx={{ width: 82, height: 100 }} />
									<Box width="100%">
										<Skeleton />
										<Skeleton />
										<Skeleton />
										<Skeleton width="60%" />
									</Box>
								</Box>
								<Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2.5 }}>
									<Skeleton width="100%" variant="rectangular" sx={{ height: 26 }} />
									<Skeleton width="100%" variant="rectangular" sx={{ height: 26 }} />
								</Box>
							</div>
						) : (
							<Item />
						)}
					</Grid>
					<Grid item xs={12} md={4}>
						<CartTotals />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ShoppingCart;
