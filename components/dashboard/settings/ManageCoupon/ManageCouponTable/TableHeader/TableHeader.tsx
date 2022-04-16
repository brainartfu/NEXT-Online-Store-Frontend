import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Align } from "../../../../../../types/align";
import { Order } from "../../../../../../types/order";
import { UnfoldMoreIcon } from "../../../../../../uiElements/icons";
import { Data } from "../ManageCouponTable";

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
		id: "name",
		align: "center",
		disablePadding: true,
		label: "Name",
	},
	{
		id: "date",
		align: "center",
		disablePadding: false,
		label: "Date",
	},
	{
		id: "amount",
		align: "center",
		disablePadding: false,
		label: "Amount",
	},
	{
		id: "status",
		align: "center",
		disablePadding: false,
		label: "Status",
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
				<TableCell align="right" padding="normal">
					Actions
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
