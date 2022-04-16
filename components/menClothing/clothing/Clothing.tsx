import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard";
import { productData } from "../../home/latestProducts/data";
import { ViewMoreButton } from "../../styledComponents";

// data

const Clothing: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="xl">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Clothing
				</Typography>
				<>
					<Grid container spacing={{ xs: 2, md: 4 }}>
						{productData.map((product, idx) => (
							<Grid key={idx} item xs={6} sm={4} md={3}>
								<ProductCard key={idx} product={product} />
							</Grid>
						))}
					</Grid>
					<Box mt={5} textAlign="center">
						<ViewMoreButton variant="contained" color="secondary">
							View more
						</ViewMoreButton>
					</Box>
				</>
			</Container>
		</Box>
	);
};

export default Clothing;
