import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	languageSelect: {
		background: theme.palette.primary.main,
		"& .MuiOutlinedInput-root": {
			borderRadius: 0,
			color: theme.palette.secondary.main,
			"& .MuiSvgIcon-root": {
				color: theme.palette.secondary.main,
			},

			"& > .MuiSelect-select": {
				display: "flex",
				alignItems: "center",
				gap: 5,
			},
		},
	},
	menuItem: {
		color: "#292929",
		fontFamily: "Poppins",
		background: "#E2BC82 !important",
		"& > svg": { marginRight: 5 },
	},
}));
