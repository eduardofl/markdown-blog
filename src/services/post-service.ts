import fs from 'fs';

const BASE_PATH = 'posts';

export function getPostSlugs(): Array<string> {
  const files = fs.readdirSync(BASE_PATH);
  const postSlugs = files.filter(file => fs.statSync(`${BASE_PATH}/${file}`).isDirectory());

  return postSlugs;
}

export function getPostMetadataBySlug(slug: string) {
  const fileContent = fs.readFileSync(`${BASE_PATH}/${slug}/metadata.json`, 'utf-8');
  const data = JSON.parse(fileContent);

  return data;
}

export function getPostContentBySlug(slug: string) {
  const fileContent = fs.readFileSync(`${BASE_PATH}/${slug}/content.md`, 'utf-8');
  
  return fileContent;
}


