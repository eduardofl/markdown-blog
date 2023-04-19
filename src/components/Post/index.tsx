import ReactMarkdown from 'react-markdown';

import PageTitle from '../PageTitle';
import PostWrapper from './PostWrapper';

const Post = ({ content, title }): JSX.Element => {
  return (
    <PostWrapper>
      <PageTitle>{`${title} - Blog Markdown`}</PageTitle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PostWrapper>
  );
};

export default Post;
