import { useSliderStyles } from "./sliderStyled";
import { Box, Button, Container, Divider, Grid, Menu, MenuItem, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

import { StarIcon, ThumbUpIcon } from "../../../uiElements/icons";
import { BorderLinearProgress, SectionBox } from "../../styledComponents";
import { CircularProgressbarWithCount, Heading, Link } from "../../ui";
import { sliderData } from "./data";
import RatingsSliderItem from "./RatingsSliderItem";
import RatingsText from "./styledComponent/RatingsText";
import RatingPopup from "./RatingPopup";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Lazy, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useStyles } from "./styled";
import { MenuFilterSvg } from "../../icons";

// disyplay star details
const StarViewProgress = ({
	starTitle,
	progressValue,
	starCount,
}: {
	starTitle: string;
	progressValue: number;
	starCount: number;
}) => {
	return (
		<Box component={Button} sx={{ p: 0, my: 1.5, width: "100%", display: "flex", alignItems: "center", gap: 1.2 }}>
			<RatingsText color="#7A7A7A" sx={{ whiteSpace: "nowrap" }}>
				{starTitle}
			</RatingsText>
			<BorderLinearProgress variant="determinate" value={progressValue} />
			<Typography sx={{ color: "#7A7A7A" }} variant="body2">
				{starCount}
			</Typography>
		</Box>
	);
};

const RatingsAndReviews = () => {
	const props: { itemLength: number } = { itemLength: sliderData.length };
	const classes = useSliderStyles(props);
	const ownCSS = useStyles();

	const [isRatingOpen, setIsRatingOpen] = useState(false);
	const [ratings, setRatings] = useState<number | null>(0);

	// for swiper slieder
	const pagination = {
		clickable: true,

		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	const handleTogglePopup = (value: boolean) => {
		setIsRatingOpen(value);
	};

	const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);
	const isOpenFilter = Boolean(anchorElFilter);

	const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElFilter(event.currentTarget);
	};
	const handleFilterClose = () => {
		setAnchorElFilter(null);
	};

	//

	return (
		<SectionBox>
			<Container>
				<Heading text="Ratings & Reviews" variant="h6" textAlign="center" mb={5} />
				<Grid
					// sx={{ width: "100%" }}
					container
					spacing={10}
				>
					<Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
						<Box
							// className={ownCSS.ratingBox}
							sx={{
								display: "flex",
								textAlign: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithCount
									value={66}
									count={4}
									desc="Out of 5"
									icon={<StarIcon fontSize="large" color="primary" />}
								/>
							</Box>
							<RatingsText sx={{ mt: 4 }}>Based on 365 ratings</RatingsText>
							{/* star count */}
							<Box mb={2} sx={{ width: "100%" }}>
								<StarViewProgress starTitle="5 Star" starCount={173} progressValue={70} />
								<StarViewProgress starTitle="4 Star" starCount={100} progressValue={50} />
								<StarViewProgress starTitle="3 Star" starCount={110} progressValue={60} />
								<StarViewProgress starTitle="2 Star" starCount={20} progressValue={30} />
								<StarViewProgress starTitle="1 Star" starCount={10} progressValue={10} />
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4} sx={{ position: "relative" }}>
						<Box
							className={ownCSS.ratingBox}
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithCount
									value={90}
									count="93%"
									desc="Out of 5"
									icon={<ThumbUpIcon fontSize="large" color="primary" />}
								/>
							</Box>
							<RatingsText sx={{ mt: 4 }} color="#9B9B9B">
								Based on 77 recommendation.
							</RatingsText>
							<RatingsText sx={{ my: 1.2 }}>Would you recommend this item?</RatingsText>
							<Button fullWidth sx={{ fontFamily: "Poppins" }} color="secondary" variant="contained">
								Yes, I will recommend
							</Button>
							<Button fullWidth sx={{ mt: 2.5 }} color="secondary" variant="outlined">
								No, I will not
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box sx={{ height: 160, width: 160 }}>
								<CircularProgressbarWithChildren
									value={0}
									styles={buildStyles({
										textColor: "red",
										pathColor: "#E2BC82",
										trailColor: "#E6E6E6",
									})}
								>
									<Rating
										size="small"
										name="simple-controlled"
										value={ratings}
										onChange={(event, newValue) => {
											setRatings(newValue);
										}}
									/>
									<Typography sx={{ mt: 1, fontWeight: 500, opacity: 0.6 }}>Rate it!</Typography>
								</CircularProgressbarWithChildren>
							</Box>
							<Typography sx={{ mt: 4, fontSize: 18, fontWeight: 500 }}>
								Have you purchased this item?
							</Typography>
							<Button
								onClick={() => handleTogglePopup(true)}
								variant="contained"
								color="secondary"
								sx={{ mt: 2.5 }}
								fullWidth
							>
								Write a review
							</Button>
						</Box>
					</Grid>
				</Grid>
				<Divider sx={{ height: 2, background: "#E3E3E3", mt: 6, mb: 1 }} />

				{/* filter category */}
				<Box sx={{ textAlign: "right" }}>
					<Button
						id="basic-button"
						aria-haspopup="true"
						sx={{ p: 0, minWidth: 0 }}
						onClick={handleFilterClick}
						aria-expanded={isOpenFilter ? "true" : undefined}
						aria-controls={isOpenFilter ? "basic-menu" : undefined}
					>
						<MenuFilterSvg sx={{ height: 40, width: 40 }} />
					</Button>

					<Menu
						id="basic-menu"
						anchorEl={anchorElFilter}
						open={isOpenFilter}
						onClose={handleFilterClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<Link href="/search-results">
							<MenuItem onClick={handleFilterClose}>Good Ratings</MenuItem>
						</Link>
						<Link href="/search-results">
							<MenuItem onClick={handleFilterClose}>Average Ratings</MenuItem>
						</Link>
						<Link href="/search-results">
							<MenuItem onClick={handleFilterClose}>Bad Ratings</MenuItem>
						</Link>
					</Menu>
				</Box>

				{/* ratings slider */}
				<Swiper
					className={classes.mySwiper}
					navigation={true}
					pagination={pagination}
					lazy={true}
					spaceBetween={30}
					modules={[
						Pagination,
						Navigation,
						// Autoplay,
						Lazy,
					]}
					// autoplay={{
					// 	delay: 5000,
					// 	disableOnInteraction: false,
					// }}
				>
					{sliderData.map((comment, idx) => (
						<SwiperSlide key={idx}>
							<RatingsSliderItem comment={comment} />
							<RatingsSliderItem comment={comment} />
							<RatingsSliderItem comment={comment} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
			{/* popup - RatingsAndReviews */}
			<RatingPopup isOpen={isRatingOpen} handleTogglePopup={handleTogglePopup} />
		</SectionBox>
	);
};

export default RatingsAndReviews;
