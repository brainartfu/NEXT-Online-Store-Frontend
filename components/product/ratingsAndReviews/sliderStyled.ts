import { makeStyles } from "@mui/styles";

export const useSliderStyles = makeStyles((theme) => ({
	mySwiper: (props: { itemLength: number }) => ({
		height: "100%",
		width: "100%",
		paddingBottom: 50,
		"& .swiper-button-prev, & .swiper-button-next": {
			top: "100%",
			marginTop: "-43px",
			// zIndex: 99,
			width: `calc(100% - 40px * ${props.itemLength})`,
			"&::after": {
				color: "#292929",
				fontSize: 18,
				fontWeight: 700,
			},
		},
		"& .swiper-pagination": {
			postion: "relative",
			"& .swiper-pagination-bullet": {
				postion: "relative",
				background: "#fff",
				height: 20,
				width: 20,
				opacity: 0.5,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#fff",
				border: "none",
				height: 20,
				width: 20,
				fontWeight: 500,
				opacity: 1,
			},
		},
	}),
}));
//
