import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const EmailFilled = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_610_891)">
					<rect width="64" height="64" rx="10" transform="matrix(-1 0 0 1 70 3)" fill="#E2BC82" />
				</g>
				<path
					d="M48 33.44H45.875V26.16C45.875 23.8623 44.0844 22 41.875 22H34.125C31.9156 22 30.125 23.8623 30.125 26.16V33.44H28C27.4469 33.44 27 33.9047 27 34.48V46.96C27 47.5352 27.4469 48 28 48H48C48.5531 48 49 47.5352 49 46.96V34.48C49 33.9047 48.5531 33.44 48 33.44ZM38.875 41.1425V42.865C38.875 43.008 38.7625 43.125 38.625 43.125H37.375C37.2375 43.125 37.125 43.008 37.125 42.865V41.1425C36.867 40.9499 36.6745 40.6771 36.5751 40.3635C36.4757 40.0498 36.4745 39.7114 36.5718 39.397C36.6691 39.0827 36.8598 38.8085 37.1164 38.614C37.3731 38.4195 37.6824 38.3147 38 38.3147C38.3176 38.3147 38.6269 38.4195 38.8836 38.614C39.1402 38.8085 39.3309 39.0827 39.4282 39.397C39.5255 39.7114 39.5243 40.0498 39.4249 40.3635C39.3255 40.6771 39.133 40.9499 38.875 41.1425ZM43.625 33.44H32.375V26.16C32.375 25.1558 33.1594 24.34 34.125 24.34H41.875C42.8406 24.34 43.625 25.1558 43.625 26.16V33.44Z"
					fill="#292929"
				/>
				<defs>
					<filter
						id="filter0_d_610_891"
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
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_610_891" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_610_891" result="shape" />
					</filter>
				</defs>
			</svg>
		</SvgIcon>
	);
};
export default EmailFilled;
