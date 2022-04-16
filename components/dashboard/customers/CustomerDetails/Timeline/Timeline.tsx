import {
	Box,
	Stack,
	Checkbox,
	IconButton,
	Typography,
	CardContent,
	InputAdornment,
	FormControlLabel,
} from "@mui/material";
import { DashboardDivider, RoundButton } from "../../../../styledComponents";
import { AttachmentIcon, SmileIcon } from "../../../components/icons";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: 8,

		"& .timeline-item": {
			position: "relative",
			boxSizing: "border-box",
			color: "#292929",
			paddingLeft: 20,
			paddingBottom: 20,
			paddingRight: 0,
			textAlign: "left",

			"&::before": {
				content: '""',
				position: "absolute",
				boxSizing: "border-box",
				inset: "8px auto -12px -2.5px",
				borderLeft: "3px solid #D9D9D9",
			},

			"&:last-child::before": { borderLeft: 0 },
		},
		"& .timeline-bullet": {
			boxSizing: " border-box",
			width: 12,
			height: 12,
			borderRadius: 32,
			position: "absolute",
			top: 6,
			left: -7,
			right: "auto",
			display: "flex",
			alignItems: "center",
			background: "#292929",
			justifyContent: "center",
		},
	},
}));

const Timeline = () => {
	const classes = useStyles();
	return (
		<StyledCard>
			<CardContent>
				<Stack direction="row" alignItems="center" spacing={2.5} justifyContent="space-between">
					<Typography sx={{ fontSize: 18 }} fontWeight="bold">
						Timeline
					</Typography>
					<FormControlLabel label="Show comments" control={<Checkbox defaultChecked />} />
				</Stack>

				<DashboardDivider sx={{ my: 2.5 }} />

				{/* timeline stepper */}
				<Box className={classes.root}>
					{[...Array(5)].map((item, idx) => (
						<div key={idx} className="timeline-item">
							<div className="timeline-bullet" />{" "}
							<Box sx={{ display: "flex", gap: 2.5, justifyContent: "space-between" }}>
								<Typography>
									This customer placed Order no. <strong>12345</strong>
								</Typography>
								<Typography component="span" color="text.secondary" fontSize={10}>
									<time>30 May 2022 at 2:44 pm</time>
								</Typography>
							</Box>
						</div>
					))}
				</Box>

				<DashboardDivider sx={{ my: 2.5 }} />

				{/* input filed */}
				<Box component="form">
					<Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
						<StyledTextField
							sx={{ flex: 1 }}
							type="search"
							size="small"
							placeholder="Leave your comment..."
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton>
											<AttachmentIcon />
										</IconButton>
										<IconButton>
											<SmileIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<RoundButton sx={{ px: 4 }} type="submit" variant="contained" color="secondary">
							Post
						</RoundButton>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Timeline;
