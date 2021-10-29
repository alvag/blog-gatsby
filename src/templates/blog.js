import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../layouts/BlogLayout';
import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';
import Seo from '../components/seo';

function Blog( props ) {
	const { data, pageContext } = props;
	const posts = data.allStrapiArticle.nodes;

	return (
		<BlogLayout>
			<Seo title="Mi blog"/>
			<PostsList posts={posts}/>
			<Pagination pageContext={pageContext}/>
		</BlogLayout>
	);
}

export const query = graphql`
		query($skip: Int!, $limit: Int!) {
		  allStrapiArticle(
		        skip: $skip,
		        limit: $limit,
		        sort: {fields: createdAt, order: DESC}
		    ) {
		     nodes {
			    id
		        title
		        slug
		        content
		        createdAt
		        miniature {
		          url
		        }
		    }
		  }
		}`;

export default Blog;
