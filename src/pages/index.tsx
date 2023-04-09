import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { List } from '@mui/material';
import Container from '@mui/material/Container';

import FeaturedPost from '../components/FeaturedPost';
import PageTitle from '../components/PageTitle';
import { getPostSlugs, getPostMetadataBySlug } from '../services/post-service';

export const getStaticProps: GetStaticProps = async () => {
  const postSlugs = getPostSlugs();

  const featuredPosts = postSlugs.map((slug) => {
    const metadata = getPostMetadataBySlug(slug);
    const { title, date, description, image, imageLabel } = metadata;

    return { slug, title, date, description, image, imageLabel };
  });

  return {
    props: {
      featuredPosts,
    },
  };
};

const Blog = ({ featuredPosts }): JSX.Element => {
  return (
    <>
      <PageTitle>Blog Markdown</PageTitle>
      <Container disableGutters maxWidth="md" sx={{ marginX: 'auto' }}>
        <List>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.slug} post={post} />
          ))}
        </List>
      </Container>
    </>
  );
};

export default Blog;