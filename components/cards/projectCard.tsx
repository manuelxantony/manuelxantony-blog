export default function ProjectCard({
  id,
  name,
  description,
}: {
  id: number;
  name: string;
  description: string;
}) {
  return (
    // card design
    <div className="border border-solid border-1 border-[#eceff133] rounded-[20px] h-[320px] mb-5 p-4 transition-colors bg-[#0f0e0e]">
      {/* card content layout */}
      <div className="h-full width flex flex-col justify-center items-center">
        <h2 className="font-bold mb-4">{name}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

// .resources_resource__NTeNg {
//     --resource-bg: hsla(0,0%,9%,.3);
//     width: 100%;
//     height: 320px;
//     border-radius: 20px;
//     background: var(--resource-bg);
//     box-shadow: var(--shadow-large);
//     text-decoration: none;
//     position: relative;
//     -webkit-backdrop-filter: blur(3px);
//     backdrop-filter: blur(3px);
//     border: 1px solid var(--accents-2);
//     z-index: 1;
//     transition: background .25s ease;
//     box-shadow: none;
// }
