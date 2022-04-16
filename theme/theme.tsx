import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
	interface DefaultTheme extends Theme {}
}

const theme = createTheme({
	typography: {
		fontFamily: [
			"Roboto",
			"Poppins",
			"Euclid Circular A",
			"Sedan",
			"Oswald",
			"Lato",
			"Bangers",
			"cursive",
			"sans-serif",
		].join(","),
		body1: {
			fontFamily: "Poppins",
		},
		body2: {
			fontFamily: "Poppins",
		},
		h1: {
			fontFamily: "Poppins",
		},
		h2: {
			fontFamily: "Poppins",
		},
		h3: {
			fontFamily: "Poppins",
		},
		h4: {
			fontFamily: "Poppins",
		},
		h5: {
			fontFamily: "Poppins",
		},
		h6: {
			fontFamily: "Poppins",
		},
	},
	palette: {
		mode: "light",
		primary: {
			main: "#E8BD83",
			light: "#E2BC82",
		},
		secondary: {
			main: "#292929",
			light: "#282828",
			dark: "#1F1F1F",
		},
		text: {
			primary: "#292929",
			secondary: "#939393",
		},
	},
});

export let appTheme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: "Poppins",
					textTransform: "capitalize",
					borderRadius: 0,
				},
			},
		},

		MuiFilledInput: {
			styleOverrides: {
				root: {
					border: `1px solid ${theme.palette.primary.main}`,
					backgroundColor: "#fff",
					borderRadius: 0,
					// color: theme.palette.secondary.main,
					// opacity: 0.8,
					"&:hover:not(.Mui-disabled):before": {
						borderBottom: 0,
					},
					"&::before": {
						borderBottom: 0,
					},
					"&::after": {
						borderBottom: 0,
					},
				},
			},
		},
		MuiStepIcon: {
			styleOverrides: {
				root: {
					color: "#EEEEEE",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					// height: 50, // it's overwrite all height small, large , medium - should avoid here
					borderRadius: 0,
					color: theme.palette.secondary.main,
					opacity: 0.8,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					"& .MuiPaper-root": {
						margin: 16,
						// "& .MuiDialogTitle-root": {
						// 	padding: theme.spacing(2, 2, 1, 2),
						// },
						// "& .MuiDialogContent-root": {
						// 	padding: theme.spacing(2),
						// },
						"& .MuiDialogActions-root": {
							padding: theme.spacing(2.5, 3),
						},
					},
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					paddingTop: 0,
					paddingBottom: 0,
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					borderBottom: "1px solid #D8D8D8 !important",
					color: theme.palette.secondary.main,
					opacity: 0.8,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: {
					"& .MuiDrawer-paper": {
						maxWidth: 345,
						[theme.breakpoints.down(367)]: {
							width: "100%",
							maxWidth: "100%",
						},
					},
				},
			},
		},
	},
});
appTheme = responsiveFontSizes(appTheme);
