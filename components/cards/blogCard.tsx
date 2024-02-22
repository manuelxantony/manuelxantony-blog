import Link from 'next/link';

export default function BlogCard({
  id,
  slur,
  title,
  description,
  link,
}: {
  id: number;
  slur: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    // <div className="w-full md:w-[60%] h-[200px] bg-[#000000] border border-solid border-1 border-[#eceff133] rounded-3xl p-7 hover:border-[#f9fafaa1] relative">
    <div className="w-full  h-[100px]">
      <Link className="h-full flex flex-col gap-4 justify-center" href={link}>
        <div className="text-[30px] font-bold ">{title}</div>
        <p>{description}</p>
      </Link>
      <div className="blur-line-blog-card" />
    </div>
  );
}
