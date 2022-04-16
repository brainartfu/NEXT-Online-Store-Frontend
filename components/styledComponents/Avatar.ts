// import { Avatar as MuiAvatar } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const Avatar = styled(Image)({
	borderRadius: "100%",
	border: "2px solid #292929 !important",
});

export default Avatar;
