import Home from '@/components/home/home';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';

export default function Page() {
  return (
    <main>
      <div>
        <div className="star-container bottom-0 rotate-[135deg]">
          <div className="star"></div>
        </div>
        <div className="star-container right-0 rotate-[45deg]">
          <div className="star"></div>
        </div>
        <Home />
        <About />
        <Projects />
      </div>
    </main>
  );
}
