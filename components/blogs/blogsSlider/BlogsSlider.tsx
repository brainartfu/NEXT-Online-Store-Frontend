import { FC } from "react";
// import { useStyles } from "./styled";
import Image from "next/image";
import { Typography, Box, Button } from "@mui/material";

// Import Swiper
import { Pagination, Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderData } from "./data";
import { ArrowRightAltIcon } from "../../../uiElements/icons";
import { Link } from "../../ui";
import { useSliderStyles } from "../../product/ratingsAndReviews/sliderStyled";

const BlogsSlider: FC = () => {
	const props: { itemLength: number } = { itemLength: sliderData.length };
	const sliderCSS = useSliderStyles(props);
	// const classes = useStyles();

	// for swiper slieder
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<Swiper
			className={sliderCSS.mySwiper}
			navigation={true}
			pagination={pagination}
			modules={[Pagination, Navigation, Lazy]}
			lazy={true}
			// autoplay={{
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// }}
		>
			{sliderData.map((item, idx) => (
				<SwiperSlide key={idx}>
					<Box sx={{ position: "relative" }}>
						{/* <Box className={classes.banner}> */}
						<Image src={item.image} alt="banner-hero" layout="responsive" placeholder="blur" />
						{/* </Box> */}
					</Box>
					<Box my={3}>
						<Typography variant="h6" fontWeight="medium">
							{item.title}
						</Typography>
						<Typography variant="subtitle2" fontWeight="light" sx={{ my: 1.3, color: "#ABABAB" }}>
							{item.subTitle}
						</Typography>
						<Typography color="text.secondary">{item.desc}</Typography>
						<Link href="/blogs/1">
							<Button
								sx={{ mt: 2.5, minWidth: 181, justifyContent: "space-between" }}
								color="secondary"
								variant="contained"
								endIcon={<ArrowRightAltIcon />}
							>
								Read More
							</Button>
						</Link>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BlogsSlider;
