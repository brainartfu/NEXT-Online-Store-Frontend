import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: 5,
		backgroundColor: "#ECECEC",
		boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",

		paddingLeft: 4,
		"& fieldset": {
			borderColor: "transparent",
		},
		"&:hover fieldset": {
			borderColor: "transparent",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#fff",
		},
	},
}));

export default StyledFormControl;
