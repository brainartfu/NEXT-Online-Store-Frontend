import { Box, TextField, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
	margin: "20px 0",
}));

const AuthDevider = styled(Divider)(({ theme }) => ({
	background: "#C4C4C4",
	margin: "40px 0",
}));

const AuthTitle = styled(Typography)(({ theme }) => ({
	fontSize: 24,
	fontWeight: 600,
	textAlign: "center",

	[theme.breakpoints.down("md")]: {
		fontSize: 20,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 18,
	},
}));

const AuthFooterTitle = styled(Typography)(({ theme }) => ({
	fontSize: 18,
	fontWeight: 600,
	textAlign: "center",

	[theme.breakpoints.down("md")]: {
		fontSize: 16,
	},
}));

const StyledFooterBox = styled(Box)(({ theme }) => ({
	marginTop: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const AuthSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: 20,
	color: "#666666",
	fontWeight: 500,

	[theme.breakpoints.down("sm")]: {
		fontSize: 16,
	},
}));

const StyedTextField = styled(TextField)(({ theme }) => ({
	width: "100%",
	// "& .MuiOutlinedInput-input": {
	// 	padding: 0,
	// 	paddingRight: 14,
	// 	fontSize: 20,
	// },
	"& .MuiOutlinedInput-root": { paddingLeft: 0 },
	// "& .MuiInputAdornment-root": {
	// 	width: 55,
	// 	height: 55,
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	// background: theme.palette.secondary.main,
	// },
	// "& .MuiInputAdornment-positionEnd": {
	// 	// background: "white",
	// 	// width: 0,
	// 	// height: 55,
	// },
}));

export { StyedTextField, StyledBox, AuthTitle, AuthDevider, AuthSubtitle, AuthFooterTitle, StyledFooterBox };
