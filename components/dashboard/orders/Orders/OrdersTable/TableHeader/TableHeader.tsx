import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Align } from "../../../../../../types/align";
import { Order } from "../../../../../../types/order";
import { UnfoldMoreIcon } from "../../../../../../uiElements/icons";
import { Data } from "../OrdersTable";

interface TableHeaderProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
}

interface HeadCell {
	id: keyof Data;
	disablePadding: boolean;
	label: string;
	align: Align;
}

const headCells: readonly HeadCell[] = [
	{
		id: "orderNo",
		align: "left",
		disablePadding: true,
		label: "Order No.",
	},
	{
		id: "date",
		align: "center",
		disablePadding: false,
		label: "Date",
	},
	{
		id: "time",
		align: "center",
		disablePadding: false,
		label: "Time",
	},
	{
		id: "customer",
		align: "center",
		disablePadding: false,
		label: "Customer",
	},
	{
		id: "total",
		align: "right",
		disablePadding: false,
		label: "Total",
	},
	{
		id: "paymentStatus",
		align: "center",
		disablePadding: false,
		label: "Payment Status",
	},
	{
		id: "fulfillmentStatus",
		align: "center",
		disablePadding: false,
		label: "fulfillment Status",
	},
	{
		id: "items",
		align: "right",
		disablePadding: false,
		label: "Items",
	},
	{
		id: "deliveryMethod",
		align: "center",
		disablePadding: false,
		label: "Delivery Method",
	},
	{
		id: "tags",
		align: "right",
		disablePadding: false,
		label: "Tags",
	},
];

const TableHeader = (props: TableHeaderProps) => {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">#</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
							IconComponent={UnfoldMoreIcon}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
