import {
	Box,
	Grid,
	Container,
	IconButton,
	Typography,
	Theme,
	MenuItem,
	SelectChangeEvent,
	FormControl,
	Select,
	Button,
	Collapse,
} from "@mui/material";
import { FC, useState } from "react";
import { CloseIcon } from "../../../uiElements/icons";
import { FilterDropdwon, ProductCard } from "../../common";
import { FiltersSvg } from "../../icons";
// import { EmptyBox } from "../../styledComponents";
// import { Link } from "../../ui";
import { productData } from "./data";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const SearchProduct: FC = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [bestMatch, setBestMatch] = useState("10");

	const handleMatchChange = (event: SelectChangeEvent) => {
		setBestMatch(event.target.value as string);
	};

	// handle filter dropdown
	const handleFilterClick = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<Box mb={9.1}>
			{/* search empty */}

			{/* <Container maxWidth="lg">
				<EmptyBox my={4}>
					<Typography>
						Your search <span style={{ fontWeight: "500" }}>&quot;Sweatshirts&quot;</span> didn&apos;t match
						any results.{" "}
						<span style={{ color: "#E2BC82", textDecoration: "underline" }}>
							<Link href="/">Look at other items in our store</Link>
						</span>
					</Typography>
				</EmptyBox>
			</Container> */}

			<Container maxWidth="xl">
				<Box mb={4}>
					<Grid container spacing={5}>
						<Grid item xs={12} md={3}>
							<Box sx={{ position: "absolute", zIndex: 5, width: "100%", maxWidth: 300 }}>
								<Button
									fullWidth
									size="large"
									color="secondary"
									variant="outlined"
									startIcon={<FiltersSvg />}
									onClick={handleFilterClick}
									sx={{ justifyContent: "flex-start" }}
								>
									<Box component="span">Filters</Box>
									<Box width="inherit" display="flex" justifyContent="flex-end">
										{isFilterOpen ? <ExpandLess /> : <ExpandMore />}
									</Box>
								</Button>
								<Collapse in={isFilterOpen} timeout="auto" unmountOnExit>
									<FilterDropdwon handleFilterClick={handleFilterClick} />
								</Collapse>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant="h6" textAlign="center">
								Search results for <span style={{ color: "#E2BC82" }}>“Sweatshirts”</span>
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth sx={{ "& .MuiOutlinedInput-root": { height: 50 } }}>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={bestMatch}
									onChange={handleMatchChange}
								>
									<MenuItem value={10}>Best Match</MenuItem>
									<MenuItem value={20}>Price Low to High</MenuItem>
									<MenuItem value={30}>Price High to Low</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						height: 40,
						width: 108,
						padding: "2px 3px",
						bgcolor: (theme: Theme) => theme.palette.secondary.main,
						color: "#fff",
						mb: 2.5,
					}}
				>
					<IconButton size="small" sx={{ color: "common.white" }}>
						<CloseIcon fontSize="small" />
					</IconButton>
					<Typography sx={{ fontSize: 12, fontWeight: 500 }}>Trending</Typography>
				</Box>
				<Grid container spacing={{ xs: 2, md: 4 }}>
					{productData.map((product, idx) => (
						<Grid key={idx} item xs={6} sm={4} md={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default SearchProduct;
