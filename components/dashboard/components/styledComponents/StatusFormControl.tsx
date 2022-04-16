import { FormControl, FormControlProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledFormControlProps extends FormControlProps {
	fw?: string | number;
	fs?: string | number;
	status: string;
}

const StatusFormControl = styled(FormControl)<StyledFormControlProps>(({ theme, fw, fs, status }) => ({
	"& .MuiOutlinedInput-root, &.MuiInputBase-root": {
		boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",
		borderRadius: 5,
		fontSize: fs || 14,
		fontWeight: fw || 400,
		backgroundColor: status === "Active" ? "#E1FFE0" : status === "Inactive" ? "#FFEAEA" : "#fff",
		color: status === "Active" ? "#04AF00" : status === "Inactive" ? "#FF0303" : "#fff",
	},
	"& fieldset": {
		borderColor: "transparent",
	},
	"& .MuiSelect-icon": {
		fontSize: 20,
		color: status === "Active" ? "#04AF00" : status === "Inactive" ? "#FF0303" : "#fff",
	},
}));

export default StatusFormControl;
