import { InputLabel, InputLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledInputLabelProps extends InputLabelProps {
	fw?: string | number;
	fs?: string | number;
}

const StyledLabel = styled(InputLabel)<StyledInputLabelProps>(({ theme, fw, fs }) => ({
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(1.25),
	fontWeight: fw || 400,
	fontSize: fs || 16,
}));

export default StyledLabel;
