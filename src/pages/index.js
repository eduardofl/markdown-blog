import fs from 'fs';
import Container from '@mui/material/Container';
import FeaturedPost from '../components/FeaturedPost'; 

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const featuredPosts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const title = slug.charAt(0).toUpperCase() + slug.replace('_', ' ').slice(1); // to-do: create metadata json for each post

    return {
      slug,
      title,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    };
  });

  return {
    props: {
      featuredPosts,
    },
  };
}

const Blog = ({ featuredPosts }) => {
  return (
    <Container disableGutters maxWidth='lg' sx={{ marginX: 'auto', marginY: 1 }}>
      {featuredPosts.map((post) => (
        <FeaturedPost key={post.slug} post={post} />
      ))}
    </Container>
  );
};

export default Blog;