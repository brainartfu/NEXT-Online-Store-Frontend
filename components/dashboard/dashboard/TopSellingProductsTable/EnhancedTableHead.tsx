import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../../../types/order";
import { UnfoldMoreIcon } from "../../../../uiElements/icons";
import { Data } from "./TopSellingProductsTable";

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	align: "inherit" | "right" | "left" | "center" | "justify" | undefined;
}

const headCells: readonly HeadCell[] = [
	{
		id: "name",
		align: "left",
		label: "Name",
		disablePadding: true,
	},
	{
		id: "amount",
		align: "center",
		label: "Amount",
		disablePadding: false,
	},
	{
		id: "stock",
		align: "center",
		label: "Stock",
		disablePadding: false,
	},
];

const EnhancedTableHead = (props: EnhancedTableProps) => {
	const {
		order,
		orderBy,

		onRequestSort,
	} = props;
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
						padding={headCell.disablePadding ? "none" : "normal" || "left"}
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

				<TableCell align="center" padding="normal">
					Stock Status
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
