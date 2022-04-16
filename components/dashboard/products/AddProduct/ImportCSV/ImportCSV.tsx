import {
	Box,
	Button,
	Checkbox,
	DialogActions,
	DialogContent,
	FormControlLabel,
	IconButton,
	Typography,
} from "@mui/material";
import { PopupDivider } from "../../../../styledComponents";

const ImportCSV = ({ handleTogglePopup }: { handleTogglePopup: (toggle: boolean) => void }) => {
	return (
		<>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins" fontWeight={600}>
					Import Product by CSV
				</Typography>
				<PopupDivider />
				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="normal">
					Download a{" "}
					<Box component="div" display="inline" sx={{ color: "blue", textDecoration: "underline" }}>
						sample CSV
					</Box>{" "}
					template to see an example of the format required
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 1.25,
						border: "2px solid rgba(34,47,62, .1)",
						borderRadius: "5px",
						height: "120px",
					}}
				>
					<Box
						sx={{
							display: "flex",

							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<input hidden accept="image/*,video/*" type="file" />
							<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
								Drop file
							</Typography>
						</IconButton>

						<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2, ml: 2, mr: 2 }}>
							|
						</Typography>
						<IconButton color="primary" aria-label="upload picture" component="label">
							<input hidden accept="url*" type="url" />
							<Typography sx={{ color: "#E2BC82", fontWeight: "500", fontSize: "16px", mt: 2 }}>
								Choose File
							</Typography>
						</IconButton>
					</Box>
				</Box>

				<FormControlLabel
					sx={{ mt: 1.25, fontSize: "12px" }}
					control={<Checkbox defaultChecked />}
					label={
						<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="normal">
							Overwrite any current products that have the same handle. Existing value will be used for
							any missing columns
						</Typography>
					}
				/>
				<PopupDivider />
			</DialogContent>

			<DialogActions>
				<Button fullWidth color="secondary" variant="contained" onClick={() => handleTogglePopup(false)}>
					Cancel
				</Button>
				<Button fullWidth color="secondary" variant="outlined" onClick={() => handleTogglePopup(false)}>
					Upload
				</Button>
			</DialogActions>
		</>
	);
};

export default ImportCSV;
