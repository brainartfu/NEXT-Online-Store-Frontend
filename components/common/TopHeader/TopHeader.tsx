import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

const useStyles = makeStyles((theme) => ({
	mySwiper: {
		"& .swiper-button-next, .swiper-button-prev": {
			color: "#fff",
			background: "#292929",
			"&::after": {
				fontSize: 16,
			},
			"&.swiper-button-disabled": {
				opacity: 1,
			},
		},
		"& .swiper-button-prev": {
			left: 0,
		},
		"& .swiper-button-next": {
			right: 0,
		},
	},
}));

const TopHeader = () => {
	const classes = useStyles();

	return (
		<Box
			sx={{
				gap: 2,
				p: 1.25,
				display: "flex",
				color: "#fff",
				textAlign: "center",
				bgcolor: "#292929",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Swiper navigation={true} modules={[Navigation]} className={classes.mySwiper}>
				{[...Array(3)].map((item, idx) => (
					<SwiperSlide key={idx}>
						<Box sx={{ width: { xs: 290, sm: "100%" }, mx: "auto" }}>
							<Typography sx={{ fontFamily: "Euclid Circular A", fontSize: 10, letterSpacing: "0.22em" }}>
								USE CODE FIRST10 FOR 10% OFF YOUR FIRST ORDER
							</Typography>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default TopHeader;
