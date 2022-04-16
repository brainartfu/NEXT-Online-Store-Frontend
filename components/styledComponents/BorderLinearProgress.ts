import { styled } from "@mui/system";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 15,
	width: "100%",
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
		// backgroundColor: "#fff",
	},
	[`& .${linearProgressClasses.bar}`]: {
		backgroundColor: theme.palette.primary.main,
	},
}));

export default BorderLinearProgress;
