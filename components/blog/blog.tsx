import BlogCard from '@/components/cards/blogCard';

export default function Blog() {
  const blogPostMetaData = [
    {
      id: 1,
      slur: '',
      title: 'Starting With Next',
      description: 'Why I think next is a promising platform',
    },
    {
      id: 2,
      slur: '',
      title: 'Hooks Im Reat',
      description: 'Why hooks matters in developing react applications.',
    },
    {
      id: 3,
      slur: '',
      title: 'Redux',
      description: 'how to and when to use redux',
    },
    {
      id: 4,
      slur: '',
      title: 'Design',
      description: 'Why design matters and what it tells about a you?',
    },
  ];

  return (
    <section className="container mx-auto mt-96">
      <div className="w-full relative h-8">
        <div className="blur-line" />
      </div>
      <h1 className="font-bold  mx-3 mb-10">Blog</h1>
      <div className="flex flex-col items-center justify-center gap-5 ">
        {blogPostMetaData.map((post) => {
          console.log(post);
          return (
            <BlogCard
              key={post.id}
              id={post.id}
              slur={post.slur}
              title={post.title}
              description={post.description}
            />
          );
        })}
      </div>
    </section>
  );
}
