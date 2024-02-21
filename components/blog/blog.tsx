import BlogCard from '@/components/cards/blogCard';

export default function Blog() {
  return (
    <section className="container mx-auto mt-96">
      <div className="w-full relative h-8">
        <div className="blur-line" />
      </div>
      <h1 className="font-bold  mx-3 mb-10">Blog</h1>
      <BlogCard />
    </section>
  );
}
