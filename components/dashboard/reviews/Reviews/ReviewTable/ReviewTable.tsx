import { CardContent, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useState } from "react";
import { ROUTING_TREE } from "../../../../../constants/siteUrls";
import { Order } from "../../../../../types/order";
import { IMAGES } from "../../../../../uiElements";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { Link, TableCustomPagination } from "../../../../ui";
import { StyledButton, StyledCard } from "../../../components/styledComponents";
import EnhancedTableHead from "./EnhancedTableHead";
import TableToolbar from "./TableToolbar";

export interface Data {
	product: string;
	image: string;
	noOfReviews: number;
	avgRating: number;
	button: string;
}

function createData(product: string, image: string, noOfReviews: number, avgRating: number, button: string): Data {
	return {
		product,
		image,
		noOfReviews,
		avgRating,
		button,
	};
}

const rows = [
	createData("John Doe", "Tshirt Levis", 12, 4, "view details"),
	createData("Oliver", "Jeans Jacket", 212, 3.5, "view details"),
	createData("John Do", "Fullcap", 0, 5, "view details"),
	createData("Olive", "Tshirt Levis", 21, 4.5, "view details"),
	createData("John D", "Jeans Jacket", 0, 3, "view details"),
	createData("Oliv", "Fullcap", 19, 4, "view details"),
	createData("John ", "Tshirt Levis", 0, 0, "view details"),
	createData("Oli", "Jeans Jacket", 7, 4.5, "view details"),
	createData("Ol", "Fullcap", 7, 1, "view details"),
];

const ReviewTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("product");

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [page, setPage] = useState(0);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// const handleChangePage = (event: unknown, newPage: number) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	// };

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: "100%" }}>
			<TableToolbar />
			<StyledCard sx={{ width: "100%" }}>
				<CardContent>
					<TableContainer>
						<Table aria-labelledby="tableTitle" sx={{ minWidth: 600 }}>
							<EnhancedTableHead
								order={order}
								orderBy={orderBy}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                          		  rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												role="checkbox"
												tabIndex={-1}
												key={row.product}
												sx={{ "& .MuiTableCell-root": { p: 1.25 } }}
											>
												<TableCell padding="checkbox">{index + 1}</TableCell>

												<TableCell component="th" id={labelId} scope="row" padding="none">
													<Stack direction="row" spacing={1}>
														<Image
															src={
																row.image !== "Tshirt Levis"
																	? row.image !== "Jeans Jacket"
																		? IMAGES.FullcapImg
																		: IMAGES.JeansJacketImg
																	: IMAGES.TshirtLevisImg
															}
															height={65}
															width={65}
															objectFit="cover"
															placeholder="blur"
														/>
														<Box
															sx={{
																display: "flex",
																flexDirection: "column",
																justifyContent: "space-around",
															}}
														>
															<Typography sx={{ fontWeight: "500", fontSize: 14 }}>
																{row.image}
															</Typography>
														</Box>
													</Stack>
												</TableCell>

												<TableCell align="center">{row.noOfReviews} Reviews</TableCell>
												<TableCell align="center">{row.avgRating}</TableCell>

												<TableCell align="center">
													<Link
														href={`${ROUTING_TREE.DASHBOARD.REVIEWS.ROOT}/${
															ROUTING_TREE.DASHBOARD.REVIEWS.DETAILS
														}/${index + 1}`}
													>
														<StyledButton
															sx={{ px: 2, minWidth: "132px" }}
															variant="contained"
															color="secondary"
														>
															View Details
														</StyledButton>
													</Link>
												</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</StyledCard>
			{/* <TablePagination
 				page={page}
 				component="div"
 				count={rows.length}
 				rowsPerPage={rowsPerPage}
 				onPageChange={handleChangePage}
 				rowsPerPageOptions={[5, 10, 25]}
 				onRowsPerPageChange={handleChangeRowsPerPage}
 			/> */}

			{/* customized table pagination  */}
			<TableCustomPagination handleChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPage={rowsPerPage} />
		</Box>
	);
};

export default ReviewTable;
