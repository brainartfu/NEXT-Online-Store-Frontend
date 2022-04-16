import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StatusText = styled(Typography)(({ status }: { status: string }) => ({
	color: status === "delivered" ? "#189418" : status === "shipment" ? "#FCBA30" : "#FF0000",
}));

export default StatusText;
