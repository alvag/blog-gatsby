import React from 'react';
import { Link } from 'gatsby';
import SocialMedia from './SocialMedia';

function Menu( props ) {
	return (
		<div className="menu">
			<Link to="/">
				<h2>Mi Blog</h2>
			</Link>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet corporis cupiditate ea harum illo ipsum, molestias necessitatibus perferendis porro, quis quos tenetur vitae!</p>

			<SocialMedia/>
		</div>
	);
}

export default Menu;
