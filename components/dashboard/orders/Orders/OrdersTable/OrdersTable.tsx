import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { CardContent, SelectChangeEvent } from "@mui/material";
import { StatusChip, StyledCard } from "../../../components/styledComponents";
import TableHeader from "./TableHeader";
import TableToolbar from "./TableToolbar";
import { useState } from "react";
import { Order } from "../../../../../types/order";
import { getComparator, stableSort } from "../../../../../utils/helper/table-sort";
import { Link, TableCustomPagination } from "../../../../ui";
import { ROUTING_TREE } from "../../../../../constants/siteUrls";

export interface Data {
	orderNo: number;
	date: string | number;
	time: string;
	customer: string;
	total: number;
	paymentStatus: string;
	fulfillmentStatus: string;
	items: number;
	deliveryMethod: string;
	tags: string;
}

function createData(
	orderNo: number,
	date: string | number,
	time: string,
	customer: string,
	total: number,
	paymentStatus: string,
	fulfillmentStatus: string,
	items: number,
	deliveryMethod: string,
	tags: string,
): Data {
	return {
		orderNo,
		date,
		time,
		customer,
		total,
		paymentStatus,
		fulfillmentStatus,
		items,
		deliveryMethod,
		tags,
	};
}

const rows = [
	createData(12345, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12346, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12347, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12348, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12349, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12340, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12341, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(12342, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
	createData(
		67890,
		"22-May-2022",
		"12:15 pm",
		"Mariah Betts",
		1000,
		"UnPaid",
		"UnFulfilled",
		2,
		"Shipping",
		"Clothes",
	),
	createData(12343, "22-May-2022", "12:15 pm", "John Doe", 1000, "Paid", "Fulfilled", 2, "Shipping", "Clothes"),
];

const OrdersTable = () => {
	const [orderBy, setOrderBy] = useState<keyof Data>("orderNo");
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [order, setOrder] = useState<Order>("asc");
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
						<Table sx={{ minWidth: 1300 }} aria-labelledby="tableTitle" size="medium">
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
												key={row.orderNo}
												href={`${ROUTING_TREE.DASHBOARD.ORDERS.ROOT}/${ROUTING_TREE.DASHBOARD.ORDERS.DETAILS}/${row.orderNo}`}
											>
												<TableRow hover tabIndex={-1}>
													<TableCell padding="checkbox">{index + 1}</TableCell>
													<TableCell component="th" id={labelId} scope="row" padding="none">
														{row.orderNo}
													</TableCell>
													<TableCell align="center">{row.date}</TableCell>
													<TableCell align="center">{row.time}</TableCell>
													<TableCell align="center">{row.customer}</TableCell>
													<TableCell align="right">${row.total}</TableCell>
													<TableCell align="center">
														<StatusChip status={row.paymentStatus}>
															{row.paymentStatus}
														</StatusChip>
													</TableCell>
													<TableCell align="center">
														<StatusChip status={row.fulfillmentStatus}>
															{row.fulfillmentStatus}
														</StatusChip>
													</TableCell>
													<TableCell align="right">{row.items}</TableCell>
													<TableCell align="center">{row.deliveryMethod}</TableCell>
													<TableCell align="right">{row.tags}</TableCell>
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

export default OrdersTable;
