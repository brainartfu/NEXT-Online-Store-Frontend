import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const VariantListItem = styled(Typography)(
	({
		category,
		color,
		fs,
		fw,
	}: {
		category?: string;
		fs?: number | string;
		fw?: string | number;
		color?: string;
	}) => ({
		fontSize: fs || 14,
		fontWeight: fw || 400,
		position: "relative",
		marginLeft: 15,
		color:
			category === "Electronics"
				? "#A53AFF"
				: category === "Women"
				? "#00ADD3"
				: category === "Men"
				? "#FF7049"
				: "#20C997",

		"&::before": {
			content: '""',
			position: "absolute",
			height: 10,
			width: 10,
			left: -15,
			top: 5,

			borderRadius: 50,
			background:
				category === "Electronics"
					? "#A53AFF"
					: category === "Women"
					? "#00ADD3"
					: category === "Men"
					? "#FF7049"
					: "#20C997",
		},
	}),
);

export default VariantListItem;
