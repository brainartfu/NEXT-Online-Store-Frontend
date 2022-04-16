import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	daySelect: {
		background: "#FFFFFF",

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			backgroundColor: "#FFFFFF",
			boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
			color: theme.palette.common.black,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.black,
			},
		},
	},
}));
