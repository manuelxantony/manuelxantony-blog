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
    <div className="w-full md:w-[60%] h-[200px] bg-[#000000] border border-solid border-1 border-[#eceff133] rounded-3xl p-7 hover:border-[#f9fafaa1]">
      {/* <div className="blog-card-effect "></div> */}
      <div className="h-full flex  flex-col gap-4 justify-center">
        <h2 className="font-bold">{title}</h2>
        <h4 className="text-">{description}</h4>
      </div>
    </div>
  );
}
