import * as React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';

import PostDate from './PostDate';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    title: string;
    slug: string;
  };
}

const FeaturedPost = (props: FeaturedPostProps): JSX.Element => {
  const router = useRouter();
  const { post } = props;

  const redirectToPost = (postSlug: string) => {
    router.push(`/posts/${postSlug}`);
  };

  return (
    <Container component="article" disableGutters sx={{ my: 5 }}>
      <header>
        <Typography
          component="h3"
          variant="h5"
          color="primary"
          onClick={() => redirectToPost(post.slug)}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          {post.title}
        </Typography>
        <PostDate date={post.date} />
      </header>
      <Typography variant="subtitle2" paragraph>
        {post.description}
      </Typography>
    </Container>
  );
};

export default FeaturedPost;
