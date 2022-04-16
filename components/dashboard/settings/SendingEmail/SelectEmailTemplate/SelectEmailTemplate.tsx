import { CardContent, Typography } from "@mui/material";
// import Image from "next/image";
import { StyledCard } from "../../../components/styledComponents";
// import OrderPlacedEmailTemplate from "./order-placed-email.svg";
import OrderPlacedEmail from "./orderPlacedEmail";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy } from "swiper";
import { useStyles } from "./styled";

const SelectEmailTemplate = () => {
	const classes = useStyles();

	return (
		<StyledCard>
			<CardContent>
				{/* <Grid container spacing={1.25}>
					{[...Array(4)].map((item, idx) => (
						<Grid key={idx} item xs={12} md={6} lg={3}>
							<OrderPlacedEmail />
							<Typography sx={{ mt: 2.5, textAlign: "center" }} fontWeight="medium" variant="body2">
								Order Placed Email
							</Typography>
						</Grid>
					))}
				</Grid> */}
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
						// 350: { slidesPerView: 2 },
						// 600: { slidesPerView: 2 },
						900: { slidesPerView: 2 },
						1300: { slidesPerView: 4 },
					}}
				>
					{[...Array(4)].map((item, idx) => (
						<SwiperSlide key={idx}>
							<OrderPlacedEmail />
							<Typography sx={{ mt: 2.5, textAlign: "center" }} fontWeight="medium" variant="body2">
								Order Placed Email
							</Typography>
						</SwiperSlide>
					))}
				</Swiper>
			</CardContent>
		</StyledCard>
	);
};

export default SelectEmailTemplate;
