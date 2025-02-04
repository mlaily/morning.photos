import React from 'react';
import Helmet from 'react-helmet';
import Provider from './Provider';
import theme from '../theme';
import config from '../../config';

const { lang, twitter } = config;

const Base = ({ children }) => (
	<>
		<Helmet>
			<html lang={lang} />
			<meta name="theme-color" content={theme.colors.primary} />
			<meta name="twitter:creator" content={twitter} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<link rel="preconnect" href="https://res.cloudinary.com" />
		</Helmet>
		<Provider>{children}</Provider>
	</>
);

export default Base;
