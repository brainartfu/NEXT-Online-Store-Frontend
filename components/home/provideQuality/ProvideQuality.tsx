import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

const ProvideQuality: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Box
					sx={{
						background: (theme) => theme.palette.secondary.main,
						padding: (theme) => theme.spacing(10, 1),
						textAlign: "center",
					}}
				>
					<Typography variant="h4" sx={{ color: "#fff", fontFamily: "Sedan", letterSpacing: "0.22em" }}>
						We Provide Quality With Perfection
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default ProvideQuality;
