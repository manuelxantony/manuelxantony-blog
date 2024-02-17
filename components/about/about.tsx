import AnimatedText from '../animated/animatedText';

export default function About() {
  return (
    <section className="container mx-auto ">
      <div className="h-[820px] flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row  gap-5">
            <h1 className="font-thin">{`Hi, I'm `}</h1>
            <h1 className="font-bold">
              <AnimatedText text="Manuel Antony" />
            </h1>
          </div>
          <h3 className="text-left max-w-xl">writing web applications</h3>
        </div>
      </div>
    </section>
  );
}
