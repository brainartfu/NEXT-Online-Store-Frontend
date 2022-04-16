import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

const SettingsDivider = styled(Divider)({
	margin: "30px 0",
	background: "#ABABAB",
});

const Label = styled(Typography)({
	fontWeight: 500,
	marginBottom: 15,
});

const TitleFlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "20px",
});

const FlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "20px",
	margin: "10px 0",
});

const TitleText = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontWeight: "600",
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
}));

export { SettingsDivider, Label, TitleFlexStack, FlexStack, TitleText };
