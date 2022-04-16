import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const Facebook = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
				<path
					d="M17.28 0H0.72C0.32175 0 0 0.32175 0 0.72V17.28C0 17.6783 0.32175 18 0.72 18H17.28C17.6783 18 18 17.6783 18 17.28V0.72C18 0.32175 17.6783 0 17.28 0ZM15.201 5.25375H13.7633C12.636 5.25375 12.4178 5.78925 12.4178 6.57675V8.3115H15.1088L14.7578 11.0273H12.4178V18H9.612V11.0295H7.26525V8.3115H9.612V6.309C9.612 3.98475 11.0318 2.718 13.1063 2.718C14.1008 2.718 14.9535 2.79225 15.2033 2.826V5.25375H15.201Z"
					fill="#E2BC82"
				/>
			</svg>
		</SvgIcon>
	);
};
export default Facebook;
