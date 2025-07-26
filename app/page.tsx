import Link from "next/link";
export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the Blog</h1>
      <p><Link href="/blog">Go to Blog</Link></p>
    </main>
  );
}