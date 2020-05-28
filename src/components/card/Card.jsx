import './Card.scss';
import React from 'react';

export default function Card({ children, ...rest }) {
	return (
		<div {...rest}>
			{children.map((child, key) => {
				return child;
			})}
		</div>
	);
}
