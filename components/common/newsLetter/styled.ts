import { makeStyles } from "@mui/styles";
import { COLORS } from "../../../theme/colors";

export const useStyles = makeStyles((theme) => ({
	textField: {
		flex: 1,
		background: theme.palette.common.white,

		"& .MuiInputLabel-root, & .MuiFilledInput-root": {
			fontFamily: "Lato",
		},
		"& .MuiFilledInput-root": {
			color: COLORS.GRANITE_GREY,
		},
	},
	button: {
		fontFamily: "Oswald",
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		borderRadius: 0,
		boxShadow: "none",
		"&:hover": {
			boxShadow: "none",
		},
	},
}));
