import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

import PageBody from '../../components/PageBody';
import PageTitle from '../../components/PageTitle';
import {
  getPostSlugs,
  getPostContentBySlug,
  getPostMetadataBySlug,
} from '../../services/post-service';

const Post = ({ content, title }): JSX.Element => {
  return (
    <>
      <PageTitle>{`${title} - Blog Markdown`}</PageTitle>
      <PageBody>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </PageBody>
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
