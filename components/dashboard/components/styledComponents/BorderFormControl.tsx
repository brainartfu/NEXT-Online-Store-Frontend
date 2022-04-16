import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const BorderFormControl = styled(FormControl)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: 5,
		height: 30,
		backgroundColor: "#ECECEC",
		boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",
		borderWidth: 3,
		borderColor: theme.palette.text.secondary,

		paddingLeft: 4,
		"& fieldset": {
			borderColor: theme.palette.text.secondary,
		},
		"&:hover fieldset": {
			borderColor: "black",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#e2bc82",
		},
	},
}));

export default BorderFormControl;
