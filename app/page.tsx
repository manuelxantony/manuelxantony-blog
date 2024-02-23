import Home from '@/components/home/home';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Blog from '@/components/blog/blog';
import Header from '@/components/header';

export default function Page() {
  return (
    <main>
      <Header />
      <div>
        <div className="star-container bottom-20 rotate-[135deg]">
          <div className="star"></div>
        </div>
        <div className="star-container bottom-50 md:right-20 rotate-[55deg]">
          <div className="star"></div>
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <div className="spiral-bg overflow-hidden" />
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="blog">
          <Blog />
        </div>
      </div>
    </main>
  );
}
