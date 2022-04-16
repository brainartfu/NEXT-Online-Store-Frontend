import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Label = styled(Typography)(({ fontSize }: { fontSize?: string | number }) => ({
	marginBottom: "10px",
	fontSize: fontSize || 12,
	fontWeight: 500,
}));

export default Label;
