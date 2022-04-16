import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const EmailFill = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_610_885)">
					<rect width="64" height="64" rx="10" transform="matrix(-1 0 0 1 70 3)" fill="#E2BC82" />
				</g>
				<path
					d="M25.8291 28.8218L36.6624 34.5296C37.0264 34.7208 37.4973 34.8115 37.9711 34.8115C38.4449 34.8115 38.9158 34.7208 39.2798 34.5296L50.1131 28.8218C50.8194 28.4492 51.4868 27 50.1911 27H25.7526C24.4569 27 25.1242 28.4492 25.8291 28.8218ZM50.441 31.9427L39.2798 37.6477C38.7887 37.8998 38.4449 37.9296 37.9711 37.9296C37.4973 37.9296 37.1536 37.8998 36.6624 37.6477C36.1713 37.3955 26.3592 32.3507 25.5576 31.9413C24.9942 31.6523 25 31.9909 25 32.2516V42.5833C25 43.1783 25.8176 44 26.4444 44H49.5556C50.1824 44 51 43.1783 51 42.5833V32.253C51 31.9923 51.0058 31.6537 50.441 31.9427Z"
					fill="#292929"
				/>
				<defs>
					<filter
						id="filter0_d_610_885"
						x="0"
						y="0"
						width="76"
						height="76"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="3" />
						<feGaussianBlur stdDeviation="3" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_610_885" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_610_885" result="shape" />
					</filter>
				</defs>
			</svg>
		</SvgIcon>
	);
};
export default EmailFill;
