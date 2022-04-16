import { CardContent, Box, IconButton } from "@mui/material";
import { IMAGES } from "../../../../../uiElements";
import { CameraDarkSvg } from "../../../../icons";
import { AppAvatar } from "../../../../styledComponents";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const UserProfile = () => {
	return (
		<Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
			{/* user image */}
			<Box
				sx={{
					position: "absolute",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "primary.main",
					width: 210,
					height: 195,
					borderRadius: 2,
					boxShadow: "box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.16)",
				}}
			>
				<Box sx={{ position: "relative", display: "inline" }}>
					<AppAvatar src={IMAGES.AvatarImg} alt="avatar" objectFit="cover" height={140} width={140} />
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="label"
						sx={{
							position: "absolute",
							right: 0,
							bottom: 0,
						}}
					>
						<input hidden accept="image/*" type="file" />
						<CameraDarkSvg />
					</IconButton>
				</Box>
			</Box>
			<StyledCard sx={{ width: "100%", marginLeft: "195px", paddingLeft: 2.5 }}>
				<CardContent>
					<Box
						sx={{
							my: 2.5,
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							flexDirection: { xs: "column", md: "row" },
						}}
					>
						<StyledTextField size="small" fullWidth placeholder="First Name" />
						<StyledTextField size="small" fullWidth placeholder="Last Name" />
					</Box>
					<Box
						sx={{
							my: 2.5,
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							flexDirection: { xs: "column", md: "row" },
						}}
					>
						<StyledTextField type="email" size="small" fullWidth placeholder="Email Address" />
						<StyledTextField
							type="tel"
							inputProps={{
								inputMode: "numeric",
							}}
							size="small"
							fullWidth
							placeholder="Phone Number"
						/>
					</Box>
				</CardContent>
			</StyledCard>
		</Box>
	);
};

export default UserProfile;
