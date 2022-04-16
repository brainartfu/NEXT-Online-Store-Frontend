import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	latestProductCard: {
		position: "relative",
		background: "none !important",
		boxShadow: "none !important",
		padding: theme.spacing(1.25),
		borderRadius: 0,
		"& .MuiCardContent-root": {
			background: "#fff !important",
			padding: "0 !important",
			paddingTop: "10px !important",
		},
		"& .MuiTypography-root": {
			fontFamily: "Poppins",
			fontWeight: 500,
		},

		"&:hover $hoverView": {
			display: "flex !important",
		},
		"&:hover": {
			"&::before": {
				content: "''",
				position: "absolute",
				top: 0,
				left: 0,
				height: "100%",
				width: "100%",
				zIndex: 3,
				opacity: 0.3,
				background: "#000000",

				// backgroundImage: "linear-gradient(180deg, rgba(41, 41, 41, 0) 0%, #292929 100%)",
			},
		},
	},
	discountChip: {
		position: "absolute",
		top: 20,
		right: 20,
		fontSize: 10,
		fontWeight: 500,
		color: "#000000",
		background: "#E8BD83",
		borderRadius: 30,
		padding: "2px 8px",
	},

	hoverView: {
		position: "absolute",
		display: "none !important",
		zIndex: 3,
		bottom: 32,
		left: 0,
		right: 0,
		background: "#fff",
		justifyContent: "space-around",
		margin: theme.spacing(0, 4),
		padding: theme.spacing(0, 3),

		[theme.breakpoints.down("sm")]: {
			bottom: 16,
			margin: theme.spacing(0, 2),
		},
	},
}));
