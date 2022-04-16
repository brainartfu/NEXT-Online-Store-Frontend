import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	kgSelect: {
		background: "black",
		borderRadius: 5,

		[theme.breakpoints.down("sm")]: {
			background: "black",
		},

		"& .MuiOutlinedInput-root": {
			height: 40,

			borderRadius: 5,
			borderWidth: 3,
			borderColor: theme.palette.common.black,
			backgroundColor: "black",
			color: theme.palette.common.white,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.white,
			},
		},
	},
	regionSelect: {
		background: "#FFFFFF",

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			borderWidth: 3,
			borderColor: theme.palette.common.black,
			backgroundColor: "#FFFFFF",
			color: theme.palette.common.black,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.black,
			},
		},
	},
}));
