const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node

/* webpack: {
 	config.resolve.alias["components"] = path.join(__dirname, "components");
     config.resolve.alias["public"] = path.join(__dirname, "public");
}
*/

//trying to add this webpack code block above in the block below but i don't know how the syntax works
if (typeof require !== "undefined") {
	require.extensions[".less"] = (file) => {};
}

module.exports = (config) =>
	withCSS({
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: "[local]___[hash:base64:5]",
		},
		...withLess(
			withSass({
				lessLoaderOptions: {
					javascriptEnabled: true,
				},
			})
		),
	});
