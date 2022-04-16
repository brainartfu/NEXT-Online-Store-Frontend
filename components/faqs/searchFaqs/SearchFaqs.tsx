import { Container, Typography, Box, Button, TextField, Grid, List, ListItem, ListItemText } from "@mui/material";
import { SectionBox } from "../../styledComponents";
import { Link } from "../../ui";
import { ListHeading } from "../styledComponents";
import { searchData } from "./data";
import { useStyles } from "./styled";
const SearchFaqs = () => {
	const classes = useStyles();

	return (
		<SectionBox>
			<Container>
				<Typography variant="h6" textAlign="center">
					Frequently Asked Questions
				</Typography>
				<Box component="form" my={6}>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<TextField
							className={classes.textField}
							size="small"
							id="filled-basic"
							label="Search"
							variant="filled"
							type="search"
							required
						/>
						<Button className={classes.button} type="submit" variant="contained" color="secondary">
							Search
						</Button>
					</Box>
				</Box>
				<Grid container spacing={5}>
					{searchData.map((list, idx) => (
						<Grid key={idx} item xs={12} md={6}>
							<ListHeading sx={{ fontWeight: 500 }} variant="body2">
								{list.heading}
							</ListHeading>
							{list.questions.map((item, _idx) => (
								<List key={_idx}>
									<ListItem sx={{ p: 0 }}>
										<Link href={item.link}>
											<ListItemText secondary={item.item} />
										</Link>
									</ListItem>
								</List>
							))}
						</Grid>
					))}
				</Grid>
			</Container>
		</SectionBox>
	);
};

export default SearchFaqs;
