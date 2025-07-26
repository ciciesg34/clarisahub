import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/posts'));
  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ''),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, frontmatter } = await compileMDX({ source });

  return (
    <article className="p-6 prose">
      <h1>{frontmatter.title}</h1>
      {content}
    </article>
  );
}