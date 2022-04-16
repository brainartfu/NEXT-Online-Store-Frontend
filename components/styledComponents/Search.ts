import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: 10,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

export default Search;
