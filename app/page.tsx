import Home from '@/components/home/home';
import About from '@/components/about/about';
import Border from '@/components/border';
import Projects from '@/components/projects/projects';

export default function Page() {
  return (
    <main>
      <div>
        <div
          className="star-container bottom-0 rotate-[135deg]"
          style={{
            '--span-time': '3s',
          }}
        >
          <div className="star"></div>
        </div>
        <div
          className="star-container right-0 rotate-[45deg]"
          style={{
            '--span-time': '5s',
          }}
        >
          <div className="star"></div>
        </div>
        <Home />
        {/* <Border /> */}
        <About />
        {/* <Border /> */}
        {/* <ParticleHexagon /> */}

        <Projects />
      </div>
    </main>
  );
}
