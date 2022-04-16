import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	mySwiper: {
		"& .banner": {
			transition: "0.3s",
			position: "relative",
			backgroundSize: "cover",
			backgroundColor: "#c4c4c4",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",

			// height: "100vh",
			// height: `calc(100vh - 103.5px)`,
			height: `calc(100vh - 103.5px)`,

			padding: theme.spacing(0, 2),

			[theme.breakpoints.down("md")]: {
				height: 500,
			},
			[theme.breakpoints.down("sm")]: {
				height: 400,
			},
		},
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#fff",
				opacity: 1,
				height: 10,
				width: 10,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#E2BC82",
			},
		},
	},

	content: {
		"& .MuiButton-root, & .MuiTypography-root": {
			textTransform: "uppercase",
		},

		"& .MuiTypography-root": {
			fontSize: 30,
			color: "#FFFFFF",
			letterSpacing: "0.22em",
			transition: "0.3s",
			[theme.breakpoints.down("sm")]: {
				letterSpacing: "0.16em",
				fontSize: 24,
			},
		},

		"& .MuiButton-root": {
			fontSize: 14,
			marginTop: 30,
			borderRadius: 2,
			padding: theme.spacing(1.3, 3),
			fontFamily: "Poppins",
			fontWeight: 400,
			letterSpacing: "0.3em",
			textAlign: "center",
			transition: "0.3s",

			[theme.breakpoints.down("sm")]: {
				letterSpacing: "0.2em",
				padding: theme.spacing(1, 3),
			},
		},
	},
}));
