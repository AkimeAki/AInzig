type PageDataType = Record<
	string,
	{
		title?: string;
	}
>;

export const appTitle = "AInzig";

export const pageData: PageDataType = {
	404: {
		title: "404 Not Found"
	},
	index: {
		title: "ホーム"
	},
	game: {}
};

export const getTitle = (title?: string): string => {
	if (title === undefined) {
		const pageTitle = pageData.index?.title ?? "";
		return `${pageTitle} | ${appTitle}`;
	}

	if (pageData[title] === undefined) {
		const pageTitle = pageData["404"]?.title ?? appTitle;
		return `${pageTitle} | ${appTitle}`;
	}

	if (pageData[title]?.title === undefined) {
		return appTitle;
	}

	return `${pageData[title]?.title} | ${appTitle}`;
};

export const pathToTitle = (path: string): string | undefined => {
	const match = path.match(/^[/]+(.+)$/);

	let formatedPath: undefined | string;

	if (match?.[1] !== undefined) {
		formatedPath = match[1];
	}

	if (formatedPath !== undefined) {
		formatedPath = formatedPath.replace(/\.html$/, "");
		formatedPath = formatedPath.replace(/\.astro$/, "");
	}

	return formatedPath;
};
