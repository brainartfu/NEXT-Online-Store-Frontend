import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box component={Paper} sx={{ bgcolor: "secondary.main", color: "common.white", textAlign: "center", p: 0.6 }}>
			<Typography fontFamily="Oswald" variant="body2">
				&copy; 2022 Hoomey.
			</Typography>
		</Box>
	);
};

export default Footer;
