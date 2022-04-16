import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StatusText, StyledCard } from "../../components/styledComponents";
import { CardContent } from "@mui/material";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

function createData(name: string, email: string, status: string) {
	return { name, email, status };
}

const rows = [
	createData("John Doe", "John@abc.com", "Verified"),
	createData("Maraih Betts", "Mariah@abc.com", "Unverified"),
	createData("John Doe", "John@abc.com", "Verified"),
	createData("Maraih Betts", "Mariah@abc.com", "Unverified"),
];

const UsersTable = () => {
	return (
		<StyledCard sx={{ height: "100%" }}>
			<CardContent>
				<EnhancedTableToolbar />
				<TableContainer>
					<Table sx={{ minWidth: 430 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell>Name</TableCell>
								<TableCell align="center">Email</TableCell>
								<TableCell align="right">Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow hover key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										{index + 1}
									</TableCell>
									<TableCell align="left">{row.name}</TableCell>
									<TableCell align="center">{row.email}</TableCell>
									<TableCell align="right">
										<StatusText fw={500} status={row.status}>
											{row.status}
										</StatusText>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</StyledCard>
	);
};

export default UsersTable;
