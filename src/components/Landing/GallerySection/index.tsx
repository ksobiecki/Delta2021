import React from 'react';
import ImageGallery from 'react-image-gallery';

import SectionLayout from '../../Shared/SectionLayout';
import Header from '../../Shared/Header';

import { Left, Right } from './styled';

import img1 from '../../../assets/images/gallery/1.jpg';
import img2 from '../../../assets/images/gallery/8.jpg';

import 'react-image-gallery/styles/css/image-gallery.css';

const GallerySection = () => {
	const images = [
		{
			original: img1,
			thumbnail: img1,
		},
		{
			original: img2,
			thumbnail: img2,
		},
		{
			original: img1,
			thumbnail: img1,
		},
		{
			original: img2,
			thumbnail: img2,
		},
		{
			original: img1,
			thumbnail: img1,
		},
		{
			original: img2,
			thumbnail: img2,
		},
	];

	const ImageGalleryComponent = () => <ImageGallery items={images} />;

	return (
		<SectionLayout>
			<Left>
				<Header
					header="Galeria"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet aut distinctio magnam consectetur saepe aperiam quae id sed totam! Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
			</Left>
			<Right>
				<ImageGalleryComponent />
			</Right>
		</SectionLayout>
	);
};

export default GallerySection;
