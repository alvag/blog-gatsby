import React from 'react';
import BlogLayout from '../layouts/BlogLayout';
import { Image } from 'semantic-ui-react';
import Seo from '../components/seo';


function Post( props ) {
	const { post } = props.pageContext;
	console.log( post );

	return (
		<BlogLayout className="post">
			<Seo title={post.seo_title || post.title}
			     description={post.description}
			     image={`${process.env.STRAPI_URL}${post.miniature.url}`}/>

			<h1>{post.title}</h1>

			<Image src={`${process.env.STRAPI_URL}${post.miniature.url}`}/>

			<div className="markdown-body">
				<div dangerouslySetInnerHTML={{ __html: post.content }}/>
			</div>
		</BlogLayout>
	);
}

export default Post;
