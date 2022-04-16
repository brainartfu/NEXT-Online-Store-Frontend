import { FC, useEffect, useState } from "react";
import { Box, Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import CollectionCard from "../../common/CollectionCard";
// import CollectionsGrid from "../../common/CollectionsGrid";

// data
import { ItemData, itemData } from "./data";
import Link from "../../ui/Link";

const Collections: FC = () => {
	const [isMore, setIsMore] = useState<boolean>(false);
	const [presentCollection, setPresentCollection] = useState<ItemData[]>([]);

	const lessCollectionData = () => {
		const newCollectionArr = itemData.slice(0, 8);
		return setPresentCollection(newCollectionArr);
	};

	// fitst call data
	useEffect(() => {
		lessCollectionData();
	}, []);

	const handleRemainingCollections = () => {
		setIsMore(!isMore);
	};

	useEffect(() => {
		if (isMore) {
			setPresentCollection(itemData);
		} else {
			lessCollectionData();
		}
	}, [isMore]);

	// kept it just for checking loading sign
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 3000);

	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Our Collections
				</Typography>
				<>
					<Grid container spacing={{ xs: 2, md: 5 }}>
						{(isLoading ? Array.from(new Array(8)) : presentCollection).map((item, index) => (
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

						{/* {presentCollection.map((item, idx) => (
							<Grid key={idx} item xs={6} sm={4} md={3}>
								<Link href={item.link}>
									<CollectionCard key={idx} item={item} />
								</Link>
							</Grid>
						))} */}
					</Grid>
				</>
				<Box textAlign="center" sx={{ mt: 6.25 }}>
					<Button
						onClick={handleRemainingCollections}
						color="secondary"
						variant="contained"
						size="large"
						sx={{ letterSpacing: "0.3em", fontSize: 14, fontWeight: 400, textTransform: "uppercase" }}
					>
						{isMore ? "View Less" : "View more"}
					</Button>
				</Box>
			</Container>
			{/* <CollectionsGrid itemData={itemData} /> */}
		</Box>
	);
};

export default Collections;
