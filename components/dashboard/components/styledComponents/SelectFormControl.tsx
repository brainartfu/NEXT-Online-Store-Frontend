import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectFormControl = styled(FormControl)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		opacity: 1,
		color: "#fff",
		borderRadius: 5,
		backgroundColor: "#292929",
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

		"& > .MuiSelect-select": {
			display: "flex",
			alignItems: "center",
			gap: 5,
		},
	},

	"& .MuiSelect-icon": {
		color: "#fff",
	},
}));

export default SelectFormControl;
