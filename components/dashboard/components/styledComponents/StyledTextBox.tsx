import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextBox = styled(Box)(({ theme }) => ({
	margin: theme.spacing(2.25, 0),
}));

export default StyledTextBox;
