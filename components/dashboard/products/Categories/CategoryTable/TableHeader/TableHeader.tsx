import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Align } from "../../../../../../types/align";
import { Order } from "../../../../../../types/order";
import { UnfoldMoreIcon } from "../../../../../../uiElements/icons";
import { Data } from "../CategoryTable";

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
		id: "category",
		align: "center",
		disablePadding: true,
		label: "Category",
	},
	{
		id: "date",
		align: "center",
		disablePadding: true,
		label: "Date",
	},
	{
		id: "subCategories",
		align: "center",
		disablePadding: true,
		label: "Sub Categories",
	},
	{
		id: "products",
		align: "center",
		disablePadding: false,
		label: "Products",
	},
	{
		id: "status",
		align: "center",
		disablePadding: false,
		label: "Status",
	},
	{
		id: "action",
		align: "center",
		disablePadding: false,
		label: "Action",
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
