import { CardContent, Box, Typography, Divider, Stack } from "@mui/material";
import { IMAGES } from "../../../../../uiElements";
import { StyledCard } from "../../../components/styledComponents";
import { AppAvatar, DashboardDivider } from "../../../../styledComponents";

const UserProfile = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box component="div" display="flex" alignItems="center" gap={2.5}>
					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							gap: 2.5,
							alignItems: "center",
							p: 1,
						}}
					>
						<Box sx={{ minHeight: { xs: 50, sm: 100 }, minWidth: { xs: 50, sm: 100 } }}>
							<AppAvatar
								src={IMAGES.AvatarImg}
								alt="avatar"
								objectFit="cover"
								height={100}
								width={100}
								placeholder="blur"
							/>
						</Box>

						<div>
							<Typography gutterBottom fontWeight="600">
								John Doe
							</Typography>
							<Typography fontWeight="medium" variant="body2" color="text.secondary">
								johndoe@abc.com
							</Typography>
						</div>
					</Box>

					<Typography variant="body2" color="text.secondary">
						Customer for 2 months
					</Typography>
				</Box>

				<DashboardDivider sx={{ my: 2.5 }} />

				<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
					<Box
						sx={{
							border: "1px solid #ABABAB",
							borderRadius: 5,
							p: 1.25,
							width: "100%",
							textAlign: "center",
						}}
					>
						<Typography color="text.secondary" gutterBottom fontWeight="medium" fontSize={18}>
							Orders
						</Typography>
						<Typography gutterBottom fontWeight="bold" fontSize={30}>
							1
						</Typography>
					</Box>
					<Box
						sx={{
							border: "1px solid #ABABAB",
							borderRadius: 5,
							p: 1.25,
							width: "100%",
							textAlign: "center",
						}}
					>
						<Typography color="text.secondary" gutterBottom fontWeight="medium" fontSize={18}>
							Orders
						</Typography>
						<Typography gutterBottom fontWeight="bold" fontSize={30}>
							$1000
						</Typography>
					</Box>
				</Stack>
			</CardContent>
		</StyledCard>
	);
};

export default UserProfile;
