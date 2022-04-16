import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const Commitment: FC = () => {
	return (
		<Box my={9.1}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center" }}>
					<Typography
						color="common.black"
						sx={{ fontSize: 12, fontFamily: "Lato", fontStyle: "italic", letterSpacing: "0.04em" }}
					>
						Your number one source for all exquisite products. We&apos;re dedicated to providing you the
						best of high quality products, with a focus on dependability, customer service and affordable
						prices.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Commitment;
