import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
	borderRadius: 20,
	boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
}));

export default StyledCard;
