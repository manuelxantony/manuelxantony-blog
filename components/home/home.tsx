import AnimatedText from '../animated/animatedText';

export default function Home() {
  return (
    <section className="container mx-auto ">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-5 relative">
            <h1 className="font-thin">{`Hi, I'm `}</h1>
            <h1 className="font-bold">
              {/* Manuel Antony */}
              <AnimatedText text="Manuel Antony" />
            </h1>
          </div>
          <p className="text-left text-[22px] tracking-wider font-thin">
            Writing applications for web in nextjs
          </p>
        </div>
      </div>
    </section>
  );
}
