import { Box, Rating, Theme, Typography } from "@mui/material";
import { AppAvatar } from "../../styledComponents";
import { COLORS } from "../../../theme/colors";
import { useStyles } from "./styled";
import RatingsText from "./styledComponent/RatingsText";
import Image from "next/image";
import { CommentType } from "./data";

interface IProps {
	comment: CommentType;
}

const RatingsSliderItem = ({ comment }: IProps) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
				<Box sx={{ position: "relative", height: 75, width: 75 }}>
					{/* <AppAvatar src={IMAGES.Health1Img} alt="avatar" objectFit="cover" height={75} width={75} /> */}
					<AppAvatar src={comment.avatar} alt="avatar" objectFit="cover" height={75} width={75} />
				</Box>
				<RatingsText sx={{ mt: 1.3 }}>{comment.avatarName}</RatingsText>
			</Box>
			<Box className={classes.comment}>
				<Box
					sx={{
						p: 2.5,
						background: (theme: Theme) => theme.palette.common.white,
						border: `1px solid ${COLORS.BORDER[0]}`,
					}}
				>
					<Rating name="read-only" value={comment.stars} readOnly />
					<RatingsText sx={{ my: 1 }}>{comment.productName}</RatingsText>
					<Typography sx={{ color: COLORS.GRANITE_GREY }}>{comment.desc}</Typography>
					<Box sx={{ mt: 2.5, position: "relative" }}>
						{comment.productImage && (
							<Image
								src={comment.productImage}
								alt="product-image"
								width={84}
								height={116}
								objectFit="contain"
								placeholder="blur"
							/>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default RatingsSliderItem;
