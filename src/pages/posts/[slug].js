import { Container } from "@mui/material";
import fs from "fs";
import Head from "next/head";
import ReactMarkdown from 'react-markdown'

export default function Post({ content, title }) {
  return (
    <>
      <Head>
        <title>{title} - Blog Markdown</title>
      </Head>
      <Container disableGutters maxWidth='lg' sx={{ marginX: 'auto' }}>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </Container>
      
    </>
  );
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
  const title = slug.charAt(0).toUpperCase() + slug.replace('_', ' ').slice(1); // to-do: create metadata json for each post

  return {
    props: {
      content: fileContent,
      title,
    },
  };
}