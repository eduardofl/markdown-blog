import type { GetStaticPaths, GetStaticProps } from 'next';

import {
  getPostSlugs,
  getPostContentBySlug,
  getPostMetadataBySlug,
} from '../../services/post-service';
import Post from '../../components/Post';

const PostPage = ({ content, title }): JSX.Element => {
  return <Post title={title} content={content} />;
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slugParameter = context.params.slug;
  const slug = Array.isArray(slugParameter) ? slugParameter[0] : slugParameter;

  const fileContent = getPostContentBySlug(slug);
  const postMetadata = getPostMetadataBySlug(slug);
  const { title } = postMetadata;

  return {
    props: {
      content: fileContent,
      title,
    },
  };
};
