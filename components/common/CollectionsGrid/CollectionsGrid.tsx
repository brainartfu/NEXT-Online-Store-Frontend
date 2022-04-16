import { Box, Container, Grid, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import { ICollection } from "../../../types/collection";
import { Link } from "../../ui";
import CollectionCard from "../CollectionCard";

const CollectionsGrid = ({ itemData }: { itemData: ICollection[] }) => {
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
									<Link href={item.link}>
										<CollectionCard key={index} item={item} />
									</Link>
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

export default CollectionsGrid;
