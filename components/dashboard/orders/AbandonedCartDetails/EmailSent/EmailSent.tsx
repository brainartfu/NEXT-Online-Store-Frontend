import { CardContent, Box, Typography } from "@mui/material";
import Check from "../../../../icons/Check";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const EmailSent = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box sx={{ textAlign: "center" }}>
					<Check sx={{ fontSize: { xs: 45, sm: 70 } }} />
					<Typography sx={{ my: 2.5 }} fontWeight="medium" fontSize={18}>
						Cart recovery email sent
					</Typography>
					<Typography variant="body2">
						A reminder email was sent to the customer on 22-May-2022 at 12:15 pm
					</Typography>

					<Box mt={2.5} px={{ xs: 0, md: 10 }}>
						<StyledTextField
							placeholder="https://www.hoomey.co/products/"
							fullWidth
							size="small"
							required
						/>
					</Box>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default EmailSent;
