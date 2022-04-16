import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	currencySelect: {
		background: theme.palette.secondary.main,

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 44,
			borderRadius: 0,
			color: theme.palette.common.white,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.white,
			},
		},
	},

	// similar procut view styles
	mySwiper: {
		paddingBottom: 30,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#fff",
				opacity: 1,
				height: 8,
				width: 8,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#E2BC82",
			},
		},
	},

	rating: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		gap: 1,

		"& .MuiRating-icon": {
			fontSize: 10,
			color: theme.palette.primary.light,
		},

		"& .MuiTypography-root": {
			fontSize: 8,
		},
	},

	buttonArea: {
		"& .MuiButton-root": {
			marginLeft: 5,
			height: 20,
			fontSize: 10,
			background: theme.palette.common.white,
		},

		"& .MuiSvgIcon-root": {
			height: 16,
			width: 15,
		},
	},

	// hover menu
	dropdown: {
		position: "relative",
		dislplay: "inline-block",

		"&:hover": {
			"& .dropdownContent": {
				visibility: "visible",
				opacity: 1,
				transform: "translateY(0)",
				zIndex: 1,
				transitionDelay: "0.2s",
			},
		},

		"& .dropdownContent": {
			minWidth: 982,
			// minWidth: "100%",

			position: "absolute",
			background: "#fff",
			opacity: 0,
			zIndex: -1,
			transition: "0.3s",
			visibility: "hidden",
			transform: "translateY(-3em)",
			boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
		},
	},
}));

// paperprops
export const paperPropsStyles = {
	overflow: "visible",
	filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.20))",
	mt: 1.5,
	"& .MuiAvatar-root": {
		width: 32,
		height: 32,
		ml: -0.5,
		mr: 1,
	},
	"&:before": {
		content: '""',
		display: "block",
		position: "absolute",
		top: 0,
		right: 14,
		width: 10,
		height: 10,
		bgcolor: "background.paper",
		transform: "translateY(-50%) rotate(45deg)",
		zIndex: 0,
	},
};
