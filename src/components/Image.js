import React from 'react';
import styled from '@emotion/styled';
import Photo from '../components/Photo';

const ImageStyle = styled.img`
	max-width: 100%;
	width: auto;
	height: auto;
`;

const Image = ({ src, size, ...props }) =>
	src.startsWith('/') ? (
		<ImageStyle src={src} {...props} />
	) : (
		<Photo name={src} size={size} {...props} />
	);

Image.defaultProps = {
	size: 'blog',
};

export default Image;
