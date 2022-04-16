import { Box, List, Stack, Button, ListItem, Popover, Typography, ListItemButton } from "@mui/material";
import { MenuFilterProps } from "../../../../types/menu-filter";
import { DashboardDivider } from "../../../styledComponents";
import styles from "../styles";

const Notifications = ({ anchorEl, isOpen, handleClose }: MenuFilterProps) => {
	return (
		<Popover
			id="notifications-menu"
			open={isOpen}
			anchorEl={anchorEl}
			onClose={handleClose}
			PaperProps={{
				elevation: 0,
				sx: { ...styles.menu, "& .MuiListItemButton-root": { p: 0 } },
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<Box sx={{ p: 1.25 }}>
				<Stack direction="row" spacing={2.5} alignItems="center">
					<Typography sx={{ flexGrow: 1, fontSize: 14, fontWeight: "bold" }}>Notifications</Typography>

					<Button
						size="small"
						variant="text"
						color="secondary"
						sx={{ fontSize: 14, textDecoration: "underline" }}
					>
						See all
					</Button>
				</Stack>

				<DashboardDivider />

				<nav aria-label="main mailbox folders">
					<List>
						{[...Array(3)].map((_, idx) => (
							<ListItem key={idx} disablePadding>
								<ListItemButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
									<Box
										sx={{
											display: "flex",
											gap: 2.5,
											borderBottom: "1px solid #F4F4F4",
											"&::last-child": { border: 0 },
										}}
									>
										{/* left content */}
										<Box sx={{ py: 1, display: "flex", alignItems: "flex-start", gap: 0.5 }}>
											<div>
												<Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
													<Box
														sx={{
															height: 8,
															width: 8,
															background: "#FF0303",
															borderRadius: 30,
														}}
													/>
													<Typography fontSize={14} fontWeight="medium">
														New Registeration: John Doe
													</Typography>
												</Box>
												<Typography sx={{ mt: 0.5, ml: 2.5 }} fontSize={12}>
													Lorem ipsum dolor sit amet...
												</Typography>
											</div>
										</Box>

										{/* right -> date */}
										<Typography fontSize={10} color="text.secondary">
											24 May 2022 03:45 pm
										</Typography>
									</Box>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</nav>
			</Box>
		</Popover>
	);
};

export default Notifications;
