import fs from "fs";
import ReactMarkdown from 'react-markdown'

export default function Post({ content }) {
  return <main>
    <ReactMarkdown>{content}</ReactMarkdown>
  </main>
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  return {
    props: {
      content: fileContent,
    },
  };
}