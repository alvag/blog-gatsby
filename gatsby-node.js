const path = require( 'path' );
const { paginate } = require( 'gatsby-awesome-pagination' );

exports.createPages = async ( { actions, graphql } ) => {
	const { createPage } = actions;

	const posts = await graphql( `
		query {
		  allStrapiArticle(sort: {fields: createdAt, order: DESC}) {
		     nodes {
			    id
		        title
		        slug
		        content
		        description
		        seo_title
		        createdAt
		        miniature {
		          url
		        }
		    }
		  }
		}` );

	paginate( {
		createPage, // The Gatsby `createPage` function
		items: posts.data.allStrapiArticle.nodes, // An array of objects
		itemsPerPage: 2, // How many items you want per page
		pathPrefix: '/', // Creates pages like `/blog`, `/blog/2`, etc
		component: path.resolve( 'src/templates/blog.js' ), // Just like `createPage()`
	} );

	posts.data.allStrapiArticle.nodes.forEach( post => {
		createPage( {
			path: `/${post.slug}`,
			component: path.resolve( 'src/templates/post.js' ),
			context: {
				post
			}
		} );
	} );
};
