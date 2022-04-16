import Image from "next/image";
import { useStyles } from "./styled";
import { Box, Stack, Typography, Divider, Rating, Card, CardContent, IconButton } from "@mui/material";

// types
import { IProduct } from "../../../types/product";
import { COLORS } from "../../../theme/colors";
import { Link, PriceTypography } from "../../ui";
import { BagSvg, FavoriteFillSvg, FavoriteOutlineSvg } from "../../icons";

import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../../store/slices/cartSlice";
import { useState } from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const [isFavourite, setIsFavourite] = useState(false);

	const handlefavorites = () => {
		setIsFavourite(!isFavourite);
	};

	return (
		<Box>
			<Link href={"/product/" + product.id}>
				<Card className={classes.latestProductCard}>
					<Box sx={{ background: COLORS.PRODUCT_CARD_BG, position: "relative" }}>
						<Image
							src={product.image}
							alt={product.name}
							height={469}
							width={340}
							objectFit="cover"
							layout="responsive"
							className="swiper-lazy"
							placeholder="blur"
						/>

						{/* hover view item  */}
						{/* <Stack
						className={classes.hoverView}
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={2}
					>
						<IconButton onClick={handlefavorites} color="primary" size="large" aria-label="add-to-favorite">
							{isFavourite ? <FavoriteFillSvg /> : <FavoriteOutlineSvg />}
						</IconButton>

						<IconButton
							onClick={() => dispatch(addToCart(product))}
							color="primary"
							size="large"
							aria-label="add-to-cart"
						>
							<BagSvg />
						</IconButton>
					</Stack> */}
					</Box>

					<CardContent>
						<Typography component="div">{product.name}</Typography>
						<PriceTypography discount={product.discount} price={product.price} fontSize={12} />
						<Box component="span" sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
							<Rating name="read-only" value={4} readOnly size="small" />
							<Typography sx={{ fontSize: 12 }}>(45)</Typography>
						</Box>
					</CardContent>

					<Typography className={classes.discountChip}> -{product.discount}%</Typography>
				</Card>
			</Link>
			<Stack
				// sx={{
				// 	position: "absolute",
				// 	// display: "none !important",
				// 	zIndex: 3,
				// 	bottom: 50,
				// 	left: 0,
				// 	right: 0,
				// 	background: "#fff",
				// 	justifyContent: "space-around",
				// 	mx: 4,
				// 	px: 3,
				// }}
				className={classes.hoverView}
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
			>
				<IconButton onClick={handlefavorites} color="primary" size="large" aria-label="add-to-favorite">
					{isFavourite ? <FavoriteFillSvg /> : <FavoriteOutlineSvg />}
				</IconButton>

				<IconButton
					onClick={() => dispatch(addToCart(product))}
					color="primary"
					size="large"
					aria-label="add-to-cart"
				>
					<BagSvg />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default ProductCard;
