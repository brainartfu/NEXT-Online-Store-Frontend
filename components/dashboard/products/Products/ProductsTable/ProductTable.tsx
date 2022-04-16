import { CardContent, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useState } from "react";
import { Order } from "../../../../../types/order";
import { IMAGES } from "../../../../../uiElements";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { TableCustomPagination } from "../../../../ui";
import { StatusText, StyledCard, StyledFormControl } from "../../../components/styledComponents";
import EnhancedTableHead from "./EnhancedTableHead";
import { useStyles } from "./styled";
import TableToolbar from "./TableToolbar";

export interface Data {
	product: string;
	image: string;
	status: string;
	inventory: number;
	varient: number;
	type: string;
	vendor: string;
}

function createData(
	product: string,
	image: string,
	status: string,
	inventory: number,
	varient: number,
	type: string,
	vendor: string,
): Data {
	return {
		product,
		image,
		status,
		inventory,
		varient,
		type,
		vendor,
	};
}

const rows = [
	createData("John Doe", "Tshirt Levis", "Active", 12, 4, "Women", "Hoomey"),
	createData("Oliver", "Jeans Jacket", "Inactive", 212, 0, "Men", "Hoomey"),
	createData("John Do", "Fullcap", "Active", 0, 5, "clothing", "Hoomey"),
	createData("Olive", "Tshirt Levis", "Inactive", 21, 0, "Men", "Hoomey"),
	createData("John D", "Jeans Jacket", "Active", 0, 6, "Women", "Hoomey"),
	createData("Oliv", "Fullcap", "Inactive", 19, 4, "clothing", "Hoomey"),
	createData("John ", "Tshirt Levis", "Active", 0, 0, "Men", "Hoomey"),
	createData("Oli", "Jeans Jacket", "Inactive", 7, 8, "Men", "Hoomey"),
	createData("Ol", "Fullcap", "Inactive", 7, 0, "Women", "Hoomey"),
];

const ProductTable = () => {
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState<keyof Data>("inventory");

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [page, setPage] = useState(0);
	const [filter, setFilter] = useState("10");
	const classes = useStyles();

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};

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

												<TableCell align="left">
													<Box sx={{ minWidth: "135px", height: "45px" }}>
														<StyledFormControl
															fullWidth
															size="small"
															className={
																row.status === "Active"
																	? classes.Active
																	: classes.Inactive
															}
														>
															<Select
																labelId="demo-simple-select-label"
																id="demo-simple-select"
																value={filter}
																onChange={handleFilter}
															>
																<MenuItem value={10}>{row.status}</MenuItem>
																<MenuItem value={20}>
																	{row.status === "Active" ? "Inactive" : "Active"}
																</MenuItem>
															</Select>
														</StyledFormControl>
													</Box>
												</TableCell>
												<TableCell align="center">
													<Stack direction="row" spacing={1}>
														<StatusText
															fw={500}
															status={row.inventory !== 0 ? "In Stock" : "Out of Stock"}
														>
															{row.inventory} in stock
														</StatusText>
														{row.varient !== 0 && (
															<Typography sx={{ fontWeight: "400", fontSize: 14 }}>
																for {row.varient} variants
															</Typography>
														)}
													</Stack>
												</TableCell>

												<TableCell align="center">{row.type}</TableCell>

												<TableCell align="center">{row.vendor}</TableCell>
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

export default ProductTable;
