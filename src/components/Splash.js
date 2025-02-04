// @flow
import React, { type Node } from 'react';
import { themeGet } from 'tamia';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Inverted from './Inverted';

const Container = styled.div`
	height: 33vh;
	min-height: 100px;
	max-height: 400px;
	${props =>
		props.inverted &&
		css`
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-shadow: 0 0 0.2ex rgba(0, 0, 0, 0.3);
		`}
`;

const Image = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: inherit;
	min-height: 100px;
	max-height: 400px;
	background-color: ${themeGet('colors.bg')};
	background-position: center top;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
`;

type Props = {
	src: string,
	inverted: boolean,
	children: Node,
};

export default ({ src, inverted, children }: Props) => {
	const content = (
		<Container inverted={inverted}>
			<Image style={{ backgroundImage: `url(${src})` }} />
			{children}
		</Container>
	);
	if (inverted) {
		return <Inverted>{content}</Inverted>;
	}
	return content;
};
