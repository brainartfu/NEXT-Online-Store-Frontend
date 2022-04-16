import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
	gradientBg: {
		position: "relative",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
			zIndex: 5,
			backgroundImage: "linear-gradient(180deg, rgba(41, 41, 41, 0) 0%, #292929 100%)",
		},
	},
	content: {
		position: "absolute",
		zIndex: 5,
		width: "100%",
		bottom: 44,
		left: 0,
		color: "#fff",
		textTransform: "uppercase",
		fontFamily: "Sedan",
		textAlign: "center",
	},
}));
