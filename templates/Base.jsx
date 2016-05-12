const viewport = extra => 'width=device-width, initial-scale=1.0' + (extra ? `, ${extra}` : '');

export default function($, children) {
	const { lang, title, viewportExtra, pageType } = $;
	const { getPageTitle, getMetaTags, getBodyClasses, Style, Script, __ } = $;
	return (
		<html lang={lang}>
			<head>
				<meta charset="utf-8" />
				<title>{getPageTitle({ title })}</title>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content={viewport(viewportExtra)} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				{getMetaTags()}

				<link rel="alternative" href="/feed.xml" title={__('titleBlog')} type="application/atom+xml" />

				<Style src="/build/styles.css" />
				<Script src="/build/counters.js" inline />
			</head>
			<body class={getBodyClasses(pageType)}>
				{children}
			</body>
		</html>
	);
}
