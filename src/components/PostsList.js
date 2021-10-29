import React from 'react';
import { Card, Grid, Icon, Image } from 'semantic-ui-react';
import { map } from 'lodash/collection';
import { Link } from 'gatsby';

function PostsList( props ) {
	const { posts } = props;
	console.log( posts );

	return (
		<Grid className="posts-list">
			{map( posts, ( post ) => (
				<Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
					<Link to={`/${post.slug}`}>
						<Card className="post-list__item">
							<Image src={`${process.env.STRAPI_URL}${post.miniature.url}`}/>
							<Card.Content>
								<Card.Header>{post.title}</Card.Header>
							</Card.Content>
							<Card.Content extra>
								<Card.Meta>
									<Icon name="calendar alternate outline"/>
									{post.createdAt}
								</Card.Meta>
							</Card.Content>
						</Card>
					</Link>
				</Grid.Column>
			) )}
		</Grid>
	);
}

export default PostsList;
