import React from 'react';
import { Button } from 'semantic-ui-react';
import BlogLayout from '../layouts/BlogLayout';

function Home( props ) {
	return (
		<BlogLayout>
			<h1>Home</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum impedit obcaecati quia sed veritatis vitae! A dicta dolore exercitationem iure laborum non numquam quas rem repellat, soluta. Consequuntur, omnis!</p>

			<Button primary>Primary</Button>
			<Button secondary>Secondary</Button>
		</BlogLayout>
	);
}

export default Home;
