import { Box, Grid, Container, CardContent, Typography } from "@mui/material";
import { DashboardDivider, RoundButton } from "../../../styledComponents";
import { AppDropzone, BackIconButton } from "../../../ui";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../components/styledComponents";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useRouter } from "next/router";

const Blogs = () => {
	const router = useRouter();
	const editorRef = useRef("test");

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Add Blog</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<Grid container spacing={2.5}>
					{/* menu */}
					<Grid item xs={12} md={7}>
						<StyledCard>
							<CardContent>
								<StyledTextBox>
									<StyledLabel fw="500">Title</StyledLabel>
									<StyledTextField size="small" fullWidth placeholder="Monthly Phone Wallpaper" />
								</StyledTextBox>

								<StyledTextBox>
									<StyledLabel fw="500">Title</StyledLabel>
									<StyledTextField size="small" fullWidth placeholder="Hoomey" />
								</StyledTextBox>

								<StyledTextBox>
									<StyledLabel fw="500">Description</StyledLabel>
									<Editor
										apiKey={process.env.NEXT_PUBLIC_TEXT_EDITOR_API_KEY}
										onInit={(evt, editor) => (editorRef.current = "test")}
										initialValue="<p>Write description here...</p>"
										init={{
											height: 200,
											menubar: false,
											plugins: [
												"advlist",
												"autolink",
												"lists",
												"link",
												"image",
												"charmap",
												"preview",
												"anchor",
												"searchreplace",
												"visualblocks",
												"code",
												"codesample",
												"fullscreen",
												"insertdatetime",
												"media",
												"table",
												"code",
												"help",
											],
											statusbar: false,
											toolbar_location: "bottom",
											toolbar:
												" blocks " +
												"bold italic underline forecolor  alignleft aligncenter alignright alignjustify " +
												" link image media | | | code",
											content_style:
												"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
										}}
									/>
								</StyledTextBox>
							</CardContent>
						</StyledCard>
					</Grid>

					{/* add item */}
					<Grid item xs={12} md={5}>
						<StyledCard>
							<CardContent>
								<div>
									<StyledTextBox>
										<StyledLabel fw="500">Blog Status</StyledLabel>
										<StyledTextField size="small" fullWidth placeholder="Monthly Phone Wallpaper" />
									</StyledTextBox>
									<Typography variant="body2" color="text.secondary">
										This blog will be hidden
									</Typography>
									<DashboardDivider sx={{ my: 1.25 }} />
								</div>

								<StyledTextBox>
									<StyledLabel fw="500">Media</StyledLabel>
									<AppDropzone options={{ addRemoveLinks: true }} />
								</StyledTextBox>
							</CardContent>
						</StyledCard>
					</Grid>
				</Grid>

				<Container sx={{ mt: 6 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							flexDirection: { xs: "column", sm: "row" },
						}}
					>
						<RoundButton fullWidth color="secondary" variant="outlined">
							Cancle
						</RoundButton>
						<RoundButton fullWidth color="secondary" variant="contained">
							Add
						</RoundButton>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Blogs;
