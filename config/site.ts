export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The simpsons",
	description: "The simpsons fan page",
	navItems: [
		{
			label: "Quotes",
			href: "/qq",
		},
    {
      label: "Fan Page",
      href: "/ff",
    },

	],
	navMenuItems: [
		{
			label: "Quotes",
			href: "/q",
		},
		{
			label: "Fan Page",
			href: "/f",
		},
		{
			label: "github",
			href: "/github",
		},
	],
	links: {
		github: "https://github.com/DevKaliper/the-simpson-fan",
		twitter: "https://twitter.com/devkaliper",
	},
};
