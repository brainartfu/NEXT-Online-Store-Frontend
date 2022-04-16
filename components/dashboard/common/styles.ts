export default {
	menu: {
		borderRadius: 1,
		overflow: "visible",
		filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
		mt: 1.5,
		"&:before": {
			content: '""',
			display: "block",
			position: "absolute",
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			bgcolor: "background.paper",
			transform: "translateY(-50%) rotate(45deg)",
			zIndex: 0,
		},
	},
};
