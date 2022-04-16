import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: 5,
	minWidth: 80,
}));

export default StyledButton;
