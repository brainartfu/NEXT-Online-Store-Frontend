import { Box, CardContent, Grid, Typography } from "@mui/material";
import { RoundButton } from "../../../styledComponents";
import { StyledButton, StyledCard, StyledTextField } from "../../components/styledComponents";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "../../../../uiElements";
import { Popup } from "../../../common";
import EditReview from "./EditReview";
import PhotoCard from "./PhotoCard";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { BackIconButton } from "../../../ui";
import { useRouter } from "next/router";

const ReviewDetails = () => {
	const router = useRouter();
	const [isEditReviewOpen, setIsEditReviewOpen] = useState(false);
	const handleEditReviewTogglePopup = (boolean: boolean) => {
		setIsEditReviewOpen(boolean);
	};
	return (
		<div>
			<Box
				sx={{
					mb: 2,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<BackIconButton onClick={() => router.back()}>Review Details</BackIconButton>
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={4}>
						<PhotoCard />
					</Grid>
					<Grid item xs={12} md={4}>
						<Ratings />
					</Grid>
					<Grid item xs={12} md={4}>
						<Reviews />
					</Grid>
				</Grid>
			</Box>
			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
							Comments
						</Typography>

						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								padding: 2,
								gap: 1.25,
								border: "2px solid rgba(34,47,62, .1)",
								borderRadius: "10px",
								height: "100%",
							}}
						>
							<Box
								sx={{
									display: "flex",

									gap: 2.5,
									justifyContent: "space-between",
									flexWrap: "wrap",
								}}
							>
								<Box
									sx={{
										display: "flex",

										gap: 2.5,
										justifyContent: "flex-start",
										flexWrap: "wrap",
									}}
								>
									<Image
										src={IMAGES.JiaDoeImg}
										height={50}
										width={50}
										objectFit="cover"
										placeholder="blur"
									/>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: 0.25,
											justifyContent: "flex-start",
											flexWrap: "wrap",
										}}
									>
										<Typography sx={{ fontSize: "18px" }} fontWeight="medium">
											Jia Doe
										</Typography>
										<Typography sx={{ color: "#8B8B8B", fontSize: "12px" }} fontWeight="medium">
											22 May 2022
										</Typography>
									</Box>
								</Box>

								<RoundButton
									variant="contained"
									sx={{ maxHeight: "40px" }}
									onClick={() => handleEditReviewTogglePopup(true)}
								>
									Edit Review
								</RoundButton>
							</Box>
							<Rating name="size-large" defaultValue={3} size="large" />
							<Typography
								sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
								fontWeight="light"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
								eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum
								sit, minima optio blanditiis fugit? Vero, iure!
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									maxHeight: "116px",
									maxWidth: "84px",
									gap: 0.25,
									justifyContent: "flex-start",
									flexWrap: "wrap",
								}}
							>
								{" "}
								<Image src={IMAGES.HoodieImg} height={"116px"} width={"84px"} placeholder="blur" />
							</Box>
							<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
								<StyledTextField size="small" placeholder="Your response" fullWidth required />
								<StyledButton
									sx={{ px: 2, minWidth: "132px" }}
									type="submit"
									variant="contained"
									color="secondary"
								>
									Send
								</StyledButton>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								padding: 2,
								mt: 2,
								gap: 1.25,
								border: "2px solid rgba(34,47,62, .1)",
								borderRadius: "10px",
								height: "100%",
							}}
						>
							<Box
								sx={{
									display: "flex",

									gap: 2.5,
									justifyContent: "space-between",
									flexWrap: "wrap",
								}}
							>
								<Box
									sx={{
										display: "flex",

										gap: 2.5,
										justifyContent: "flex-start",
										flexWrap: "wrap",
									}}
								>
									<Image
										src={IMAGES.JiaDoeImg}
										height={50}
										width={50}
										objectFit="cover"
										placeholder="blur"
									/>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: 0.25,
											justifyContent: "flex-start",
											flexWrap: "wrap",
										}}
									>
										<Typography sx={{ fontSize: "18px" }} fontWeight="medium">
											Jia Doe
										</Typography>
										<Typography sx={{ color: "#8B8B8B", fontSize: "12px" }} fontWeight="medium">
											22 May 2022
										</Typography>
									</Box>
								</Box>

								<RoundButton
									sx={{ maxHeight: "40px" }}
									variant="contained"
									onClick={() => handleEditReviewTogglePopup(true)}
								>
									Edit Review
								</RoundButton>
							</Box>
							<Rating name="size-large" defaultValue={3} size="large" />
							<Typography
								sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
								fontWeight="light"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
								eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum
								sit, minima optio blanditiis fugit? Vero, iure!
							</Typography>

							<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
								<StyledTextField size="small" placeholder="Your response" fullWidth required />
								<StyledButton
									sx={{ px: 2, minWidth: "132px" }}
									type="submit"
									variant="contained"
									color="secondary"
								>
									Send
								</StyledButton>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								padding: 2,
								mt: 2,
								gap: 1.25,
								border: "2px solid rgba(34,47,62, .1)",
								borderRadius: "10px",
								height: "100%",
							}}
						>
							<Box
								sx={{
									display: "flex",

									gap: 2.5,
									justifyContent: "space-between",
									flexWrap: "wrap",
								}}
							>
								<Box
									sx={{
										display: "flex",

										gap: 2.5,
										justifyContent: "flex-start",
										flexWrap: "wrap",
									}}
								>
									<Image
										src={IMAGES.JiaDoeImg}
										height={50}
										width={50}
										objectFit="cover"
										placeholder="blur"
									/>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: 0.25,
											justifyContent: "flex-start",
											flexWrap: "wrap",
										}}
									>
										<Typography sx={{ fontSize: "18px" }} fontWeight="medium">
											Jia Doe
										</Typography>
										<Typography sx={{ color: "#8B8B8B", fontSize: "12px" }} fontWeight="medium">
											22 May 2022
										</Typography>
									</Box>
								</Box>

								<RoundButton
									sx={{ maxHeight: "40px" }}
									variant="contained"
									onClick={() => handleEditReviewTogglePopup(true)}
								>
									Edit Review
								</RoundButton>
							</Box>
							<Rating name="size-large" defaultValue={3} size="large" />
							<Typography
								sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }}
								fontWeight="light"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos amet neque dolore maxime
								eaque debitis quae, temporibus voluptates minus voluptatem. Deleniti aspernatur rerum
								sit, minima optio blanditiis fugit? Vero, iure!
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									maxHeight: "116px",
									maxWidth: "84px",
									gap: 0.25,
									justifyContent: "flex-start",
									flexWrap: "wrap",
								}}
							>
								{" "}
								<Image src={IMAGES.HoodieImg} height={"116px"} width={"84px"} placeholder="blur" />
							</Box>
							<Box component="form" sx={{ display: "flex", justifyContent: "space-between", gap: 1.25 }}>
								<StyledTextField size="small" placeholder="Your response" fullWidth required />
								<StyledButton
									sx={{ px: 2, minWidth: "132px" }}
									type="submit"
									variant="contained"
									color="secondary"
								>
									Send
								</StyledButton>
							</Box>
						</Box>
					</CardContent>
				</StyledCard>
				<Popup isOpen={isEditReviewOpen} rounded isNeedCloseBtn handleTogglePopup={handleEditReviewTogglePopup}>
					<EditReview handleTogglePopup={handleEditReviewTogglePopup} />
				</Popup>
			</Box>
		</div>
	);
};
export default ReviewDetails;
