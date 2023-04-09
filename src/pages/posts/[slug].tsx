import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import { Container } from '@mui/material';

import {
  getPostSlugs,
  getPostContentBySlug,
  getPostMetadataBySlug,
} from '../../services/post-service';

const Post = ({ content, title }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${title} - Blog Markdown`}</title>
      </Head>
      <Container disableGutters maxWidth="md" sx={{ marginX: 'auto' }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
    </>
  );
};

export default Post;

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
