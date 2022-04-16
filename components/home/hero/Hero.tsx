import { FC, useState } from "react";
import { Box, Button, Container, Typography, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Lazy } from "swiper";
import { useStyles } from "./styled";
import { heroData } from "./data";

const Hero: FC = () => {
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState(true);

	// kept it just for checking loading sign
	setTimeout(() => {
		setIsLoading(false);
	}, 1500);

	return (
		<Box mb={9.1}>
			{isLoading ? (
				<div>
					<Skeleton
						animation="wave"
						variant="rectangular"
						sx={{ width: "100%", height: { xs: 400, md: 500, lg: "100vh" } }}
					/>
				</div>
			) : (
				<Swiper
					className={classes.mySwiper}
					modules={[Pagination, Autoplay, Lazy]}
					lazy={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					{heroData.map((data, idx) => (
						<SwiperSlide key={idx}>
							<Box
								className="banner"
								sx={{
									backgroundImage: `url(${data.image})`,
								}}
							>
								<Container
									sx={{
										height: "100%",
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
									}}
								>
									<Box className={classes.content} sx={{ textAlign: data.contentPosition }}>
										<Box sx={{ display: "inline-block", textAlign: "center" }}>
											<Typography variant="h5" sx={{ fontFamily: "Sedan" }}>
												{data.title}
											</Typography>
											<Box>
												<Button variant="contained">Shop Now</Button>
											</Box>
										</Box>
									</Box>
								</Container>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Box>
	);
};

export default Hero;
