import Image from "next/image";
import { Typography, Box, IconButton, Grid } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IMAGES } from "../../../uiElements";
import { CloseIcon } from "../../../uiElements/icons";

interface IProps {
	isOpen: boolean;
	handleToggle: (isToggle: boolean) => void;
}

const SizeChart = ({ isOpen, handleToggle }: IProps) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => handleToggle(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", md: 800 } } }}
		>
			<Box sx={{ position: "absolute", top: 8, right: 8 }}>
				<IconButton color="secondary" size="small" onClick={() => handleToggle(false)}>
					<CloseIcon />
				</IconButton>
			</Box>
			<DialogContent>
				<Typography sx={{ mb: 5, textAlign: "center" }} fontWeight={600}>
					Men Shirt Size Chart
				</Typography>

				<Grid container spacing={5}>
					<Grid item xs={12} md={5}>
						<Image src={IMAGES.MenSizeImg} alt="product size" layout="responsive" placeholder="blur" />
					</Grid>

					<Grid item xs={12} md={7}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow
									sx={{
										bgcolor: (theme) => theme.palette.secondary.main,

										"& th": {
											border: 1,
											borderColor: "#656565",
											color: "common.white",
											fontWeight: 400,
										},
									}}
								>
									<TableCell align="center" />
									<TableCell align="center">Small</TableCell>
									<TableCell align="center">Medium</TableCell>
									<TableCell align="center">Large</TableCell>
									<TableCell align="center">X&nbsp;Large</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow sx={{ "& td": { border: 1, borderColor: "#656565" } }}>
									<TableCell align="center">Coller</TableCell>
									<TableCell align="center">18</TableCell>
									<TableCell align="center">20</TableCell>
									<TableCell align="center">22</TableCell>
									<TableCell align="center">23</TableCell>
								</TableRow>
								<TableRow sx={{ "& td": { border: 1, borderColor: "#656565" } }}>
									<TableCell align="center">length</TableCell>
									<TableCell align="center">18</TableCell>
									<TableCell align="center">20</TableCell>
									<TableCell align="center">22</TableCell>
									<TableCell align="center">23</TableCell>
								</TableRow>
							</TableBody>
						</Table>

						<>
							<Typography sx={{ my: 1.25 }} fontSize={18} fontWeight="500">
								Measuring Guide
							</Typography>
							<Typography fontSize={12} fontWeight="400">
								Fits may differ depending on the style or personal choice, and sizes may differ
								according on the manufacturer.
							</Typography>
						</>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
};

export default SizeChart;
