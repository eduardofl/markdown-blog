import type { GetStaticProps } from 'next';

import FeaturedPost from '../components/FeaturedPost';
import PageBody from '../components/PageBody';
import PageTitle from '../components/PageTitle';
import { getPostSlugs, getPostMetadataBySlug } from '../services/post-service';

export const getStaticProps: GetStaticProps = async () => {
  const postSlugs = getPostSlugs();

  const featuredPosts = postSlugs.map((slug) => {
    const metadata = getPostMetadataBySlug(slug);
    const { title, date, description } = metadata;

    return { slug, title, date, description };
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
      <PageBody>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.slug} post={post} />
        ))}
      </PageBody>
    </>
  );
};

export default Blog;
