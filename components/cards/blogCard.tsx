export default function BlogCard({
  id,
  slur,
  title,
  description,
}: {
  id: number;
  slur: string;
  title: string;
  description: string;
}) {
  console.log(id, slur, title, description);
  return (
    // <div className="w-full md:w-[60%] h-[200px] bg-[#000000] border border-solid border-1 border-[#eceff133] rounded-3xl p-7 hover:border-[#f9fafaa1] relative">
    <div className="w-full  h-[100px]">
      <button className="h-full flex flex-col gap-4 justify-center">
        <div className="text-[30px] font-bold ">{title}</div>
        <p>{description}</p>
      </button>
      <div className="blur-line-blog-card" />
    </div>
  );
}
