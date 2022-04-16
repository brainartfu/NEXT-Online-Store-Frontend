import { Box, Grid, Container, Typography, Button, Collapse } from "@mui/material";
import { FC, useState } from "react";
import { FilterDropdwon, ProductCard } from "../../common";
import { FiltersSvg } from "../../icons";
// import { EmptyBox } from "../../styledComponents";
import { productData } from "./data";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const FavoritesProduct: FC = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleFilterClick = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<Box mb={9.1}>
			{/* favorites empty */}
			{/* <Container maxWidth="lg">
				<EmptyBox my={4}>
					<Typography>Their is no item in your Favorites</Typography>
				</EmptyBox>
			</Container> */}

			<Container maxWidth="xl">
				<Box mb={4}>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={5} md={3}>
							<Box sx={{ position: "absolute", zIndex: 5, width: "100%", maxWidth: 300 }}>
								<Button
									fullWidth
									size="large"
									color="secondary"
									variant="outlined"
									startIcon={<FiltersSvg />}
									onClick={handleFilterClick}
									sx={{ justifyContent: "flex-start" }}
								>
									<Box component="span">Filters</Box>
									<Box width="inherit" display="flex" justifyContent="flex-end">
										{isFilterOpen ? <ExpandLess /> : <ExpandMore />}
									</Box>
								</Button>

								<Collapse in={isFilterOpen} timeout="auto" unmountOnExit>
									<FilterDropdwon handleFilterClick={handleFilterClick} />
								</Collapse>
							</Box>
						</Grid>
						<Grid item xs={12} sm={7} md={6}>
							<Typography sx={{ mt: { xs: 2.5, sm: 0 } }} variant="h6" textAlign="center">
								Favorites
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Grid container spacing={{ xs: 2, md: 4 }}>
					{productData.map((product, idx) => (
						<Grid key={idx} item xs={6} sm={4} md={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default FavoritesProduct;
