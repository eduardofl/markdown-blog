import fs from "fs";
import ReactMarkdown from 'react-markdown'

export default function Post({ content }) {
    return <main>
        <ReactMarkdown>{content}</ReactMarkdown>
    </main>
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // Return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileContent = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

    return {
      props: {
        content: fileContent,
      },
    };
  }