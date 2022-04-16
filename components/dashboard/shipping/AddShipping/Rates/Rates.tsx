import { Box, Button, CardContent, Grid, InputAdornment, Typography } from "@mui/material";
import { useState } from "react";
import ManageDialog from "./ManageDialog";
import { DashboardDivider, RoundButton } from "../../../../styledComponents";
import { StyledCard, StyledLabel, StyledTextField } from "../../../components/styledComponents";

const Rates = () => {
	const [isOpenManageDialog, setIsOpenManageDialog] = useState(false);

	const handleManageDialog = (isToggle: boolean) => {
		setIsOpenManageDialog(isToggle);
	};
	return (
		<StyledCard>
			<CardContent>
				<Typography fontWeight="500" sx={{ mb: 2.5 }}>
					Rates
				</Typography>

				{/* form input */}

				{/* rate & price*/}
				<Box>
					<Box textAlign="right">
						<Button onClick={() => handleManageDialog(true)} variant="text" size="small">
							Manage
						</Button>
					</Box>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Rate Name
							</StyledLabel>
							<StyledTextField defaultValue="Standard Shipping" fullWidth size="small" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Price
							</StyledLabel>
							<StyledTextField
								fullWidth
								size="small"
								defaultValue="100"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
					<DashboardDivider sx={{ my: 2.5 }} />
				</Box>

				{/* rate & price*/}
				<Box>
					<Box textAlign="right">
						<Button onClick={() => handleManageDialog(true)} variant="text" size="small">
							Manage
						</Button>
					</Box>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Rate Name
							</StyledLabel>
							<StyledTextField defaultValue="Local Shipping" fullWidth size="small" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Price
							</StyledLabel>
							<StyledTextField
								fullWidth
								size="small"
								defaultValue="50"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
					<DashboardDivider sx={{ my: 2.5 }} />
				</Box>

				{/* rate & price*/}
				<Box>
					<Box textAlign="right">
						<Button onClick={() => handleManageDialog(true)} variant="text" size="small">
							Manage
						</Button>
					</Box>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Rate Name
							</StyledLabel>
							<StyledTextField defaultValue="Free Shipping" fullWidth size="small" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel fs={14} fw="500">
								Price
							</StyledLabel>
							<StyledTextField
								fullWidth
								size="small"
								defaultValue="0"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
					<DashboardDivider sx={{ my: 2.5 }} />
				</Box>

				<Box textAlign="center">
					<RoundButton type="submit" variant="contained" color="secondary" sx={{ minWidth: 120 }}>
						Add
					</RoundButton>
				</Box>
			</CardContent>

			{/*  manage dialog  / popup*/}
			<ManageDialog handleDialog={handleManageDialog} isOpen={isOpenManageDialog} />
		</StyledCard>
	);
};

export default Rates;
