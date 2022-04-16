import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	Active: {
		color: "#04AF00",
		background: "#E1FFE0",
		width: 120,

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			color: "#04AF00",
			backgroundColor: "#E1FFE0",
			"& .MuiSvgIcon-root": {
				color: "#04AF00",
			},
		},
	},
	Draft: {
		color: "#FF0303",
		background: "#DBDBDB",
		width: 120,

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			color: "#676767",
			backgroundColor: "#DBDBDB",

			"& .MuiSvgIcon-root": {
				color: "#676767",
			},
		},
	},
	Inactive: {
		color: "#F97904",
		background: "#FFEAEA",
		width: 120,

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			color: "#FF0303",
			backgroundColor: "#FFEAEA",

			"& .MuiSvgIcon-root": {
				color: "#FF0303",
			},
		},
	},
}));
