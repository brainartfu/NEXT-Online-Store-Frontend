import { makeStyles } from "@mui/styles";
import { COLORS } from "../../../theme/colors";

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1, 0, 1, 0),
		display: "flex",
		alignItems: "flex-start",
		gap: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	comment: {
		position: "relative",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 26,
			left: -14,
			width: 30,
			height: 30,
			borderLeft: `1px solid ${COLORS.BORDER[0]}`,
			borderRight: `0px solid ${COLORS.BORDER[0]}`,
			borderBottom: `1px solid ${COLORS.BORDER[0]}`,
			borderTop: `0px solid ${COLORS.BORDER[0]}`,
			background: theme.palette.common.white,
			transform: "rotate(45deg)",

			[theme.breakpoints.down("sm")]: {
				top: 0,
				left: "50%",
				bottom: "100%",
				borderBottom: `0px solid ${COLORS.BORDER[0]}`,
				borderTop: `1px solid ${COLORS.BORDER[0]}`,
				transform: "rotate(45deg)",
				marginTop: -15,
				marginLeft: -15,
			},
		},
	},

	ratingBox: {
		justifyContent: "center",
		"&::before": {
			content: "''",
			position: "absolute",
			height: "65%",
			borderLeft: "2px solid #E3E3E3",
			left: 35,

			[theme.breakpoints.down("sm")]: {
				borderLeft: "none",
			},
		},
		"&::after": {
			content: "''",
			position: "absolute",
			height: "65%",
			borderRight: "2px solid #E3E3E3",
			right: -35,

			[theme.breakpoints.down("md")]: {
				borderRight: "none",
			},
		},
	},

	// mySwiper: (props: { itemLength: number }) => ({
	// 	height: "100%",
	// 	width: "100%",
	// 	paddingBottom: 50,
	// 	"& .swiper-button-prev, & .swiper-button-next": {
	// 		top: "100%",
	// 		marginTop: "-43px",
	// 		width: `calc(100% - 40px * ${props.itemLength})`,
	// 		"&::after": {
	// 			color: "#292929",
	// 			fontSize: 18,
	// 			fontWeight: 700,
	// 		},
	// 	},
	// 	"& .swiper-pagination": {
	// 		postion: "relative",
	// 		"& .swiper-pagination-bullet": {
	// 			postion: "relative",
	// 			background: "#fff",
	// 			height: 20,
	// 			width: 20,
	// 			opacity: 0.5,
	// 		},
	// 		"& .swiper-pagination-bullet-active": {
	// 			background: "#fff",
	// 			border: "none",
	// 			height: 20,
	// 			width: 20,
	// 			fontWeight: 500,
	// 			opacity: 1,
	// 		},
	// 	},
	// }),
}));
