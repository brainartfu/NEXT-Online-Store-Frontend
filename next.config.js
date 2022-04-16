/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		// external ts files
		externalDir: true,
	},
};

module.exports = nextConfig;
