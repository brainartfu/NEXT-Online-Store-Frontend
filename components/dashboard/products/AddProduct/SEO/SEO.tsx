import { Box, Button, DialogActions, DialogContent, Typography } from "@mui/material";
import { PopupDivider } from "../../../../styledComponents";
import { StyledTextField } from "../../../components/styledComponents";

const SEO = ({ handleTogglePopup }: { handleTogglePopup: (toggle: boolean) => void }) => {
	return (
		<>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
					Search engine listing preview
				</Typography>
				<PopupDivider />
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="medium">
					Page title
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" fullWidth required />
				</Box>
				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					0 of 70 chrcters used
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 1.25 }} fontWeight="medium">
					Meta description
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: "500px" }}>
					<StyledTextField size="medium" fullWidth required multiline />
				</Box>
				<Typography sx={{ color: "#8B8B8B", fontWeight: "400", fontSize: "14px", mt: 1.25 }} fontWeight="light">
					0 of 320 chrcters used
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.25, mt: 1.25 }} fontWeight="medium">
					URL handle
				</Typography>

				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField
						size="medium"
						placeholder="http://www.hoomey.co/products"
						fullWidth
						required
						multiline
					/>
				</Box>
			</DialogContent>

			<DialogActions>
				<Button fullWidth color="secondary" variant="contained" onClick={() => handleTogglePopup(false)}>
					Cancel
				</Button>
				<Button fullWidth color="secondary" variant="outlined" onClick={() => handleTogglePopup(false)}>
					Save
				</Button>
			</DialogActions>
		</>
	);
};

export default SEO;
