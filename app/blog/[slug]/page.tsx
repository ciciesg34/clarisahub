import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/mdx'; // Hapus baris ini
import { MDXRemote } from 'next-mdx-remote'; // Hapus baris ini

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  // Karena kita pakai App Router dengan plugin @next/mdx, cukup return source langsung
  return (
    <article className="prose mx-auto p-4">
      <h1 className="text-2xl font-bold">{params.slug.replace(/-/g, ' ')}</h1>
      <div>{/* MDX akan dirender otomatis karena sudah terdaftar di config */}</div>
    </article>
  );
}