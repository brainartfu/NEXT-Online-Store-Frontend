import { Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { BlogsSlider } from "../../components/blogs";

const Blogs: NextPage = () => {
	return (
		<div>
			<Head>
				<title>blogs</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box mb={9.1}>
				<Container>
					<Typography sx={{ mb: 5 }} variant="h6" fontWeight="medium" textAlign="center">
						Blogs
					</Typography>
					<BlogsSlider />
				</Container>
			</Box>
		</div>
	);
};

export default Blogs;
