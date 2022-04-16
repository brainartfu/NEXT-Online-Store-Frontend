import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { MailSvg, PersonSvg } from "../../../icons";

const Details = () => {
	return (
		<>
			<Box component="form" autoComplete="off">
				<Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap", mb: 2.5 }}>
					<TextField
						required
						placeholder="First Name *"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						required
						placeholder="Last Name *"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<TextField
					required
					fullWidth
					type="email"
					placeholder="Email Address *"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<MailSvg />
							</InputAdornment>
						),
					}}
				/>

				<Typography sx={{ fontSize: 10, my: 2.5, textAlign: "center" }}>
					By submitting, I acknowledge the{" "}
					<Button sx={{ fontSize: 10, textDecoration: "underline" }}>Terms of Service</Button> and{" "}
					<Button sx={{ fontSize: 10, textDecoration: "underline" }}>Privacy Policy</Button> and that <br />{" "}
					my review will be publicly posted and shared online
				</Typography>

				<Box sx={{ width: "100%", textAlign: "center" }}>
					<Button
						sx={{ mt: 2.5, minWidth: { xs: "auto", md: 400 } }}
						variant="contained"
						color="secondary"
						type="submit"
					>
						Submit
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Details;
