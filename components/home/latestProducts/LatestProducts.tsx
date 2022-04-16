import { FC } from "react";
import { useStyles } from "./styled";
import { Box, Container, Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard";
import { productData } from "./data";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy } from "swiper";

const LatestProducts: FC = () => {
	const classes = useStyles();

	return (
		<Box my={9.1}>
			<Container maxWidth="xl">
				<Typography sx={{ fontFamily: "Poppins", mb: 2.6 }} variant="h6" textAlign="center">
					Latest Products
				</Typography>
				<Swiper
					className={classes.mySwiper}
					slidesPerView={4}
					spaceBetween={12}
					pagination={{
						clickable: true,
					}}
					lazy={true}
					modules={[Lazy, Pagination]}
					breakpoints={{
						0: { slidesPerView: 1 },
						350: { slidesPerView: 2 },
						// 600: { slidesPerView: 2 },
						900: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
					}}
				>
					{productData.map((product, idx) => (
						<SwiperSlide key={idx}>
							<ProductCard product={product} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
};

export default LatestProducts;
