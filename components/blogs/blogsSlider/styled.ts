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
			// opacity: 0.3,
			// background: "#000000",
		},
	},

	// mySwiper: {
	// 	height: "100%",
	// 	width: "100%",
	// 	paddingBottom: 50,
	// 	"& .swiper-button-next": {
	// 		top: "100%",
	// 		marginTop: "-44px",
	// 		width: "88%",
	// 		"&::after": {
	// 			color: "#292929",
	// 			fontSize: 18,
	// 			fontWeight: 700,
	// 		},
	// 	},
	// 	"& .swiper-button-prev": {
	// 		top: "100%",
	// 		marginTop: "-44px",
	// 		width: "88%",
	// 		"&::after": {
	// 			color: "#292929",
	// 			fontSize: 18,
	// 			fontWeight: 700,
	// 		},
	// 	},
	// 	"& .swiper-pagination": {
	// 		postion: "relative",
	// 		"& .swiper-pagination-bullet": {
	// 			position: "relative",
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
	// },
}));
