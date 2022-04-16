import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",

	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		border: "1px solid #D2D2D2",
		borderRadius: 10,
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "20ch",
			"&:focus": {
				width: "28ch",
			},
		},
	},
}));

export default StyledInputBase;
