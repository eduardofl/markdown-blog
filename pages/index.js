import fs from 'fs';
import Link from 'next/link';

export default function Blog({posts}){
    return <main>
        {posts.map(post => {
            const { slug } = post
            // Temporary title
            // to-do: create metadata json for each post
            const title = slug.charAt(0).toUpperCase() + slug.replace('_', ' ').slice(1);

            return <article key={slug}>
                <Link href={`/posts/${slug}`}>
                    <h1>{title}</h1>
                </Link>
            </article>
        })}
    </main>
}

export async function getStaticProps(){
    // Get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // Get slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');

        return {
          slug,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}