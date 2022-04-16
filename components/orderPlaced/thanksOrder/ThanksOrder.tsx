import { Box, Container, Divider, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";
import { COLORS } from "../../../theme/colors";
import { HeadingText } from "../../styledComponents";

const FlexStack = styled(Box)((theme) => ({
	display: "flex",
	gap: "20px",
	alignItems: "center",
	justifyContent: "space-between",
}));

const Text = styled(Typography)((theme) => ({
	fontWeight: 500,
}));

const ThanksOrder = () => {
	return (
		<Box mb={2.5}>
			<Container>
				<Container maxWidth="md">
					<Box sx={{ background: COLORS.OFF_WHITE, py: 2.5, px: 5, textAlign: "center" }}>
						{/* <CheckSvg sx={{ height: 70, width: 70 }} /> */}
						<Zoom in={true} style={{ transitionDelay: "100ms" }} {...{ timeout: 500 }}>
							<svg
								height="70px"
								width="70px"
								viewBox="0 0 70 70"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									className="checkmark_svg"
									d="M70 35C70 44.2826 66.3125 53.185 59.7487 59.7487C53.185 66.3125 44.2826 70 35 70C25.7174 70 16.815 66.3125 10.2513 59.7487C3.68749 53.185 0 44.2826 0 35C0 25.7174 3.68749 16.815 10.2513 10.2513C16.815 3.68749 25.7174 0 35 0C44.2826 0 53.185 3.68749 59.7487 10.2513C66.3125 16.815 70 25.7174 70 35ZM52.6312 21.7437C52.3187 21.4323 51.9466 21.1871 51.5372 21.0228C51.1278 20.8585 50.6894 20.7784 50.2483 20.7874C49.8072 20.7964 49.3724 20.8943 48.97 21.0751C48.5676 21.256 48.2058 21.5161 47.9062 21.84L32.7119 41.1994L23.555 32.0381C22.933 31.4585 22.1103 31.143 21.2602 31.158C20.4101 31.173 19.5991 31.5173 18.9979 32.1185C18.3967 32.7197 18.0524 33.5308 18.0374 34.3808C18.0224 35.2309 18.3379 36.0536 18.9175 36.6756L30.4937 48.2562C30.8056 48.5675 31.177 48.8128 31.5857 48.9775C31.9944 49.1421 32.4321 49.2228 32.8726 49.2146C33.3132 49.2065 33.7476 49.1096 34.1499 48.93C34.5522 48.7503 34.9143 48.4914 35.2144 48.1688L52.6794 26.3375C53.2748 25.7184 53.6037 24.8906 53.5955 24.0317C53.5873 23.1728 53.2427 22.3514 52.6356 21.7437H52.6312Z"
									fill="#01AB0F"
								/>
							</svg>
						</Zoom>

						<Typography
							sx={{
								textTransform: "uppercase",
								fontWeight: "medium",
								letterSpacing: "0.1em",
								my: 2.5,
							}}
							variant="h5"
						>
							Thank You For Your Order
						</Typography>
						<Typography variant="body2">
							Please check your inbox, as a confirmation email is on its way
						</Typography>
						<Divider sx={{ background: "1px solid #ACACAC", my: 2.5 }} />
						<FlexStack my={2.5}>
							<Text>Order Number</Text>
							<Text sx={{ fontWeight: "600" }}>#123456789</Text>
						</FlexStack>
						<FlexStack my={2.5}>
							<Text>Order Status</Text>
							<Text sx={{ fontWeight: "600" }}>In Shipment</Text>
						</FlexStack>
						<FlexStack>
							<Text>Delivery (expected)</Text>
							<Text sx={{ fontWeight: "600" }}>23/May/2022 - 25/May/2022</Text>
						</FlexStack>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default ThanksOrder;
