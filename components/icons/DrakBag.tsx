const DarkBag = ({ height = 17, width = 15 }: { height?: number | string; width?: number | string }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.652782 7.10095C0.685223 6.69293 0.868723 6.31222 1.16674 6.03463C1.46475 5.75704 1.85542 5.60294 2.26092 5.60303H11.9856C12.3911 5.60294 12.7818 5.75704 13.0798 6.03463C13.3778 6.31222 13.5613 6.69293 13.5937 7.10095L14.2413 15.2418C14.2592 15.4658 14.2308 15.6912 14.1581 15.9036C14.0854 16.116 13.97 16.311 13.819 16.4762C13.668 16.6413 13.4848 16.7732 13.2808 16.8634C13.0769 16.9536 12.8567 17.0002 12.634 17.0002H1.61251C1.38985 17.0002 1.16962 16.9536 0.965683 16.8634C0.761744 16.7732 0.578513 16.6413 0.427526 16.4762C0.276539 16.311 0.161065 16.116 0.0883765 15.9036C0.0156877 15.6912 -0.0126424 15.4658 0.00516997 15.2418L0.652782 7.10095Z"
				fill="#292929"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.33256 1.16654C5.07173 0.420409 6.07569 0 7.12396 0C8.17223 0 9.17619 0.420409 9.91536 1.16654C10.6543 1.91243 11.0682 2.92267 11.0682 3.97465V8.04508C11.0682 8.44179 10.7466 8.76339 10.3499 8.76339C9.95321 8.76339 9.63161 8.44179 9.63161 8.04508V3.97465C9.63161 3.29936 9.3658 2.65307 8.89476 2.17761C8.42396 1.70237 7.78685 1.43662 7.12396 1.43662C6.46107 1.43662 5.82396 1.70237 5.35316 2.17761C4.88213 2.65307 4.61631 3.29936 4.61631 3.97465V8.04508C4.61631 8.44179 4.29471 8.76339 3.898 8.76339C3.50129 8.76339 3.17969 8.44179 3.17969 8.04508V3.97465C3.17969 2.92267 3.59362 1.91243 4.33256 1.16654Z"
				fill="#E2BC82"
			/>
		</svg>
	);
};

export default DarkBag;
