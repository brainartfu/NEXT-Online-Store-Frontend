import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	cartButton: {
		boxShadow: "none",
		color: theme.palette.common.white,
		"&:hover": {
			boxShadow: "none",
			background: theme.palette.primary.main,
		},
		"& .MuiSvgIcon-root": {
			marginRight: 5,
		},
		"& .MuiDivider-root": {
			background: theme.palette.common.white,
		},
	},
	cartBtnBadge: {
		background: theme.palette.secondary.main,
		width: 20,
		height: 20,
		// padding: 5,
		// paddingLeft: 4,
		lineHeight: " 0.6rem",
		fontSize: 12,
		fontWight: 500,
		borderRadius: 50,
		textTransform: "uppercase",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
