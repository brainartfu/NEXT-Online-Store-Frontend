import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const SmallFormControl = styled(FormControl)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		height: 35,
		// width: 100,
		borderRadius: 5,
		boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",

		paddingLeft: 4,
		"& fieldset": {
			borderColor: "#292929",
		},
		"&:hover fieldset": {
			borderColor: "#E2BC82",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#E2BC82",
		},
	},
}));

export default SmallFormControl;
