// @mui material components
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const AppEditorRoot = styled(Box)(({ theme }) => ({
	"& .tox-editor-container": {
		"& .tox-sidebar-wrap": {
			color: theme.palette.text.secondary,
			"& p": {
				color: theme.palette.text.secondary,
			},
			"& ul li": {
				color: theme.palette.text.secondary,
			},
		},
	},
}));

export default AppEditorRoot;
