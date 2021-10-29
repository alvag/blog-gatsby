import React from 'react';
import { map } from 'lodash';
import { Icon } from 'semantic-ui-react';

const socialNetworks = [
	{
		name: 'linkedin',
		link: 'https://linkedin.com'
	},
	{
		name: 'youtube',
		link: 'https://youtube.com'
	},
	{
		name: 'twitter',
		link: 'https://twitter.com'
	},
	{
		name: 'facebook',
		link: 'https://facebook.com'
	},
	{
		name: 'instagram',
		link: 'https://instagram.com'
	}
];

function SocialMedia( props ) {
	return (
		<div className="social-media">
			{map( socialNetworks, ( item, index ) => (
				<a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
					<Icon circular link name={item.name}/>
				</a>
			) )}
		</div>
	);
}

export default SocialMedia;
