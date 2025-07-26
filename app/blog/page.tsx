import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const files = fs.readdirSync(postsDir);
  const posts = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return { ...data, slug: data.slug || filename.replace(/\.mdx?$/, '') };
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}