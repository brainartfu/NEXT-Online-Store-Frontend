import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { CardContent, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { StatusFormControl, StyledCard } from "../../../components/styledComponents";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { Link, TableCustomPagination } from "../../../../ui";
import { Order } from "../../../../../types/order";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useState } from "react";
import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import { ROUTING_TREE } from "../../../../../constants/siteUrls";

export interface Data {
	customer: string;
	status: string;
	location: string;
	orders: number;
	spent: number;
}

function createData(customer: string, status: string, location: string, orders: number, spent: number): Data {
	return {
		customer,
		status,
		location,
		orders,
		spent,
	};
}

const rows = [
	createData("John Doe", "Active", "Oxford WI, United States", 1, 1000),
	createData("Mariah Betts", "Inactive", "United States", 0, 500),
	createData("John Doe", "Active", "Oxford WI, United States", 1, 1000),
	createData("Mariah Betts", "Inactive", "United States", 0, 500),
	createData("John Doe", "Active", "Oxford WI, United States", 1, 1000),
	createData("Mariah Betts", "Inactive", "United States", 0, 500),
	createData("John Doe", "Active", "Oxford WI, United States", 1, 1000),
	createData("Mariah Betts", "Inactive", "United States", 0, 500),
];

const CustomersTable = () => {
	const [orderBy, setOrderBy] = useState<keyof Data>("customer");
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<Order>("asc");
	const [status, setStatus] = useState("Active");
	const [page, setPage] = useState(0);

	const handleStatusChange = (event: SelectChangeEvent<unknown>) => {
		setStatus(event.target.value as string);
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
						<Table sx={{ minWidth: 650 }} aria-labelledby="tableTitle" size="medium">
							<TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
							<TableBody sx={{ "& > a": { display: "contents" } }}>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                rows.slice().sort(getComparator(order, orderBy)) */}
								{stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<Link
												key={index}
												href={`${ROUTING_TREE.DASHBOARD.CUSTOMERS.ROOT}/${ROUTING_TREE.DASHBOARD.CUSTOMERS.DETAILS}/${index}`}
											>
												<TableRow hover tabIndex={-1}>
													<TableCell padding="checkbox">{index + 1}</TableCell>
													<TableCell component="th" id={labelId} scope="row" padding="none">
														{row.customer}
													</TableCell>
													<TableCell align="center">
														<StatusFormControl status={row.status}>
															<Select
																size="small"
																value={status}
																id="demo-simple-select"
																onChange={handleStatusChange}
																labelId="demo-simple-select-label"
																IconComponent={KeyboardArrowDownIcon}
															>
																<MenuItem value="Active">Active</MenuItem>
																<MenuItem value="Inactive">Inactive</MenuItem>
															</Select>
														</StatusFormControl>
													</TableCell>
													<TableCell align="center">{row.location}</TableCell>
													<TableCell align="center">{row.orders} Orders</TableCell>
													<TableCell align="right">${row.spent}</TableCell>
												</TableRow>
											</Link>
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

export default CustomersTable;
