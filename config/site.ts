export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The simpsons",
	description: "The simpsons fan page",
	navItems: [
		{
			label: "Quotes",
			href: "/quotes",
		},
    {
      label: "Fan Page",
      href: "https://thesimpson.netlify.app/",
    },

	],
	navMenuItems: [
		{
			label: "Quotes",
			href: "/quotes",
		},
		{
			label: "Fan Page",
			href: "https://thesimpson.netlify.app/",
		},
		{
			label: "github",
			href: "/https://github.com/DevKaliper/the-simpson-fan",
		},
	],
	links: {
		github: "https://github.com/DevKaliper/the-simpson-fan",
		twitter: "https://twitter.com/devkaliper",
	},
};
