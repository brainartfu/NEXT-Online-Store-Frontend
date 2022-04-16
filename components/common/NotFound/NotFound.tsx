import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "inline-block",
		textAlign: "center",

		"& > svg": {
			marginBottom: 5,
			height: "4rem",
			width: "4rem",
			color: "#e6e6e6",
		},
	},
}));

const NotFound = ({ message, icon }: { message: string; icon: React.ReactNode }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			{icon}
			<Typography variant="h6" sx={{ fontFamily: "Titillium Web", fontWeight: "light" }} color="text.secondary">
				{message}
			</Typography>
		</Box>
	);
};

export default NotFound;
