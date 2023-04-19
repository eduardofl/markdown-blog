import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';
import * as tokens from '../../styles/tokens';
import {
  getPostSlugs,
  getPostContentBySlug,
  getPostMetadataBySlug,
} from '../../services/post-service';

const PostWrapper = styled.div`
  p {
    margin-bottom: 25px;
  }

  a {
    color: #1976d2;
  }

  code {
    background-color: ${tokens.DARK_MODE_BACKGROUND_COLOR_PAPER};
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Consolas, monospace;
    font-size: 14px;
    line-height: 1.4;
    display: inline-block;
    padding: 0.1em 0.3em;
  }

  pre {
    code {
      background-color: #000;
      color: #fff;
      border: none;
      display: block;
      padding: 0.5em;
      margin: 1em 0;
    }
  }
`;

const Post = ({ content, title }): JSX.Element => {
  return (
    <PostWrapper>
      <PageTitle>{`${title} - Blog Markdown`}</PageTitle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PostWrapper>
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
