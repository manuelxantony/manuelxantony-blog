import Home from '@/components/home/home';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Blog from '@/components/blog/blog';

export default function Page() {
  return (
    <main>
      <div>
        <div className="star-container bottom-20 rotate-[135deg]">
          <div className="star"></div>
        </div>
        <div className="star-container bottom-50 md:right-20 rotate-[55deg]">
          <div className="star"></div>
        </div>
        <Home />
        <div className="spiral-bg" />
        <About />
        <Projects />
        <Blog />
      </div>
    </main>
  );
}
