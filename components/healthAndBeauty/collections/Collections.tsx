import { FC, useState } from "react";
import { Box, Container, Grid, Typography, Skeleton } from "@mui/material";
import CollectionCard from "../../common/CollectionCard";

// data
import { itemData } from "./data";

const Collections: FC = () => {
	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Our Collections
				</Typography>
				<>
					<Grid container spacing={{ xs: 2, md: 5 }}>
						{(isLoading ? Array.from(new Array(8)) : itemData).map((item, index) => (
							<Grid key={index} item xs={6} sm={4} md={3}>
								{item ? (
									<CollectionCard key={index} item={item} />
								) : (
									<Skeleton
										variant="rectangular"
										sx={{ width: "100%", height: { xs: 180, sm: 250 } }}
									/>
								)}
							</Grid>
						))}
					</Grid>
				</>
			</Container>
		</Box>
	);
};

export default Collections;
