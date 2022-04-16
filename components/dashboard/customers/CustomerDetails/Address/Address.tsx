import { CardContent, Box, IconButton, Typography, FormControlLabel, Checkbox, Stack } from "@mui/material";
import { DeleteSvg, EditSvg } from "../../../../icons";
import { DashboardDivider, RoundButton } from "../../../../styledComponents";
import { StyledCard } from "../../../components/styledComponents";

const Address = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight={600} fontSize={18}>
					Default Address
				</Typography>

				<FormControlLabel label="New Address" control={<Checkbox checked />} />

				<Stack direction="row" spacing={2.5} alignItems="center" justifyContent="space-between">
					<Typography variant="body2">
						Road 825, block 408, Sanabis, Bahrain.
						<br /> Sanabis 408 <br />
						Bahrain <br /> 33570400
					</Typography>
					<Stack>
						<div>
							<IconButton>
								<EditSvg />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<DeleteSvg />
							</IconButton>
						</div>
					</Stack>
				</Stack>

				<DashboardDivider sx={{ my: 2.5 }} />

				<Box textAlign="center">
					<RoundButton variant="contained" color="secondary">
						Add Address
					</RoundButton>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Address;
