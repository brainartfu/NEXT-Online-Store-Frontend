import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SearchTitle = styled(Typography)({
	fontSize: 14,
	fontWeight: 500,
	color: "#ABABAB",
	marginBottom: 20,
});

export const FlexStack = styled(Box)({
	gap: 10,
	display: "flex",
	cursor: "pointer",
	margin: "16px 0",
	alignItems: "center",
});

export const Icontext = styled(Typography)({
	flex: 1,
	gap: 10,
	display: "flex",
});
