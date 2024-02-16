export default function About() {
  return (
    <section className="container mx-auto">
      <div className="md:h-[820px] flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <h1>
            {`Hi, I'm `}
            <span className="font-bold uppercase">Manuel Antony</span>
          </h1>
          <h3 className="text-left max-w-xl">writing web application</h3>
        </div>
      </div>
    </section>
  );
}
