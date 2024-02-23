import Image from 'next/image';

import AnimatedText from '@/components/animated/animatedText';

export default function Home() {
  return (
    <section className="container mx-auto relative opacity-100">
      {/* background */}
      <div className="h-screen w-full  stary-sky-bg" />
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-5">
            <h1 className="font-thin opacity-50 text-white">{`Hi, I'm `}</h1>
            <h1 className="font-bold">
              <AnimatedText text="Manuel Antony" />
            </h1>
          </div>
          <p className="text-left text-[22px] tracking-wider font-thin opacity-50 text-white">
            Writing applications for web in nextjs
          </p>
        </div>
      </div>
    </section>
  );
}
