import { makeStyles } from "@mui/styles";

export const useGlobalJSStyles = makeStyles((theme) => ({
	darkBanner: {
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
			opacity: 0.7,
			background: "#000000",
		},
	},
	darkBannerContent: {
		width: "100%",
		paddingLeft: 8,
		paddingRight: 8,
		textAlign: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		"& .MuiTypography-root": {
			color: "#FFFFFF",
		},
	},
}));
