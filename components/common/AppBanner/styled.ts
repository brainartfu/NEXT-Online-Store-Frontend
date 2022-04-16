import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	banner: {
		position: "relative",
		width: "100%",
		height: "100%",
		"&::after": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
			opacity: 0.3,
			// backgroundImage: "linear-gradient(180deg, rgba(41, 41, 41, 0) 0%, #292929 100%)",
			background: "#000000",
		},
	},
	content: {
		width: "100%",
		paddingLeft: 8,
		paddingRight: 8,
		textAlign: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		"& .MuiButton-root, & .MuiTypography-root": {
			textTransform: "uppercase",
		},

		"& .MuiTypography-root": {
			fontSize: 30,
			color: "#FFFFFF",
			letterSpacing: "0.22em",
		},

		"& .MuiButton-root": {
			fontSize: 14,
			marginTop: 30,
			borderRadius: 2,
			padding: theme.spacing(1.3, 3),
			fontFamily: "Poppins",
			fontWeight: 400,
			letterSpacing: "0.3em",
		},
	},
}));
