import Home from '@/components/home/home';
import About from '@/components/about/about';
import Border from '@/components/border';
import Projects from '@/components/projects/projects';

export default function Page() {
  return (
    <main>
      <div>
        <Home />
        {/* <Border /> */}
        <About />
        {/* <Border /> */}
        <Projects />
      </div>
    </main>
  );
}
