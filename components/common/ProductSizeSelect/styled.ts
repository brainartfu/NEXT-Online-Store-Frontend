import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	formControl: {
		"& .MuiInput-root": {
			// color: theme.palette.common.white,
			// fontSize: 10,
			// "& .MuiSvgIcon-root": {
			// 	color: COLORS.GRANITE_GREY,
			// },
			fontWeight: 500,
		},
		"& .MuiOutlinedInput-root": { color: "#fff" },
		"& .MuiInput-root::before, & .MuiInput-root::after": {
			borderBottom: 0,
		},
		"& .css-bcbryb-MuiInputBase-root-MuiInput-root-MuiSelect-root:hover:not(.Mui-disabled):before": {
			borderBottom: 0,
		},
	},
}));
