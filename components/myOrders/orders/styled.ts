import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	productSection: {
		display: "flex",
		gap: 24,
		overflowX: "auto",
		paddingBottom: 16,
	},

	boldText: {
		fontSize: 18,
		fontWeight: 600,

		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
		},
	},
	lightText: {
		fontSize: 18,
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
		},
	},
}));
