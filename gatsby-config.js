module.exports = {
	siteMetadata: {
		title: `Delta2021`,
		description: `Delta2021 website`,
		author: `Krzysztof Sobiecki`,
		siteUrl: `http://localhost:8000/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Delta2021`,
				short_name: `delta2021`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/images/logo.svg`,
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-plugin-styled-components`,
		},
	],
};
