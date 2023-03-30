import fs from 'fs';
import FeaturedPost from '../components/FeaturedPost'; 

export default function Blog({ posts, featuredPosts }){
    return <main>
        {featuredPosts.map((post) => (
            <FeaturedPost key={post.slug} post={post} />
        ))}
    </main>
}

export async function getStaticProps(){
    const files = fs.readdirSync('posts');

    const featuredPosts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        // to-do: create metadata json for each post
        const title = slug.charAt(0).toUpperCase() + slug.replace('_', ' ').slice(1);

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