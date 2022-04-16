import { Typography } from "@mui/material";

const Title = ({ content }: { content: string }) => {
	return <Typography sx={{ fontFamily: "Oswald", letterSpacing: "0.01em", fontWeight: "500" }}>{content}</Typography>;
};

export default Title;
