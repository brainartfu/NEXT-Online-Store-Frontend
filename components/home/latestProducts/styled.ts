import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
	mySwiper: {
		paddingBottom: 50,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#C4C4C4",
				opacity: 1,
				height: 10,
				width: 10,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#fff",
				border: "2px solid #E8BD83",
				height: 15,
				width: 15,
			},
		},
	},
}));
