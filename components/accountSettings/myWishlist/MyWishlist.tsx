import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../common";
import { ColorHeartSvg } from "../../icons";
import { SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { productData } from "./data";

const MyWishlist = () => {
	return (
		<Box>
			<TitleFlexStack>
				<ColorHeartSvg />
				<TitleText>My Wishlist</TitleText>
			</TitleFlexStack>

			<SettingsDivider />

			<Grid container spacing={{ xs: 2, md: 4 }}>
				{productData.map((product, idx) => (
					<Grid key={idx} item xs={12} sm={6} lg={4}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default MyWishlist;
