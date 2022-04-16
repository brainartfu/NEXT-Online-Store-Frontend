import { useEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";

// Custom styles for the Dropzone
import DropzoneRoot from "./DropzoneRoot";

interface AppDropzoneProps {
	options: {
		addRemoveLinks: boolean;
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppDropzone = ({ options }: AppDropzoneProps) => {
	const dropzoneRef = useRef("");

	useEffect(() => {
		Dropzone.autoDiscover = false;

		function createDropzone() {
			return new Dropzone(dropzoneRef.current, {
				...options,
				dictDefaultMessage: "Accept images, videos or 3D models",
				// dictDefaultMessage: (
				// 	<div className="dz-message" data-dz-message>
				// 		<span>Your Custom Message</span>
				// 	</div>
				// ),
			});
		}

		function removeDropzone() {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz: any) => dz.destroy());
		}

		createDropzone();

		return () => removeDropzone();
	}, [options]);

	return (
		<DropzoneRoot component="form" action="/file-upload" ref={dropzoneRef} className="form-control dropzone">
			<div className="dz-message" data-dz-message>
				<Stack
					direction="row"
					justifyContent="center"
					divider={<Divider orientation="vertical" flexItem />}
					spacing={2}
				>
					<Button>Add file</Button>
					<Button>Add from URL</Button>
				</Stack>
				<Typography sx={{ mt: 1.25 }}>Accept images, videos or 3D models</Typography>
			</div>
			<Box className="fallback">
				<Box component="input" name="file" type="file" multiple />
			</Box>
		</DropzoneRoot>
	);
};

// Typechecking props for the SuiDropzone
AppDropzone.propTypes = {
	options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AppDropzone;
