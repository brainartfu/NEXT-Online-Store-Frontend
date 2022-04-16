import Image from "next/image";
import { useStyles } from "./styled";
import { Box, Stack, Typography, Divider, Rating, Card, CardContent, IconButton, Skeleton } from "@mui/material";

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
	const [isLoading, setIsLoading] = useState(true);
	const [isFavourite, setIsFavourite] = useState(false);

	const handlefavorites = () => {
		setIsFavourite(!isFavourite);
	};

	// kept it just for checking loading sign
	setTimeout(() => {
		setIsLoading(false);
	}, 3000);

	return (
		<>
			{isLoading ? (
				<div>
					<Skeleton variant="rectangular" sx={{ width: "100%", height: { xs: 250, sm: 300, md: 400 } }} />
					<Skeleton variant="text" sx={{ fontSize: "1.3rem", my: 0.5 }} />
					<Skeleton width="60%" variant="text" sx={{ fontSize: "0.8rem" }} />
					<Skeleton width="70%" variant="text" sx={{ fontSize: "0.8rem" }} />
				</div>
			) : (
				<Box className={classes.root} component="div">
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

					{/* hover item -> add to cart & add to favourite */}
					<Stack
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
			)}
		</>
	);
};

export default ProductCard;
