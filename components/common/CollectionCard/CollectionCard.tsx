import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { useStyles } from "./styled";
import Image from "next/image";

// types
import { ICollection } from "../../../types/collection";

const CollectionCard = ({ item }: { item: ICollection }) => {
	const classes = useStyles();

	return (
		<Card sx={{ width: "100%", height: "auto", borderRadius: 0, boxShadow: 0 }}>
			<CardActionArea>
				<Box className={classes.gradientBg}>
					<Image
						src={item.image}
						alt={"avatar"}
						height={264}
						width={264}
						objectFit="cover"
						layout="responsive"
						placeholder="blur"
					/>
				</Box>
				<Typography className={classes.content}>{item.content}</Typography>
			</CardActionArea>
		</Card>
	);
};

export default CollectionCard;
