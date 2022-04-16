import { Button, Toolbar, Typography } from "@mui/material";
import { ArrowForwardIosIcon } from "../../../../uiElements/icons";

const EnhancedTableToolbar = () => {
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
				Users
			</Typography>

			<Button
				sx={{ minWidth: 100, color: (theme) => theme.palette.text.secondary }}
				endIcon={<ArrowForwardIosIcon />}
			>
				See all
			</Button>
		</Toolbar>
	);
};

export default EnhancedTableToolbar;
