import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

const AppSwitch = styled((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 50,
	height: 20,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 3.5,
		color: "#04AF00",

		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(28px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: "#04AF00",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "none",
		boxSizing: "border-box",
		width: 14,
		height: 14,
	},
	"& .MuiSwitch-track": {
		borderRadius: 28 / 2,
		backgroundColor: "transparent",
		border: "1px solid #04AF00",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}));

export default AppSwitch;
