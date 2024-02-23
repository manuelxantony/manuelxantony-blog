import GradientText from '../gradient';

export default function About() {
  return (
    <section id="about" className="container mx-auto pt-[100px]">
      <div className="w-full flex justify-start">
        <div className="md:w-[750px]">
          <h1 className="font-bold mb-4 text-white">About</h1>
          <h3 className="text-justify">
            <GradientText>
              {`Software Engineer with a passion for innovation and a track
              record of delivering impactful products. With over three years of
              hands-on experience, I've played a pivotal role in numerous
              in-house projects within a dynamic platform engineering team. My
              expertise spans multiple programming languages, including Golang,
              React, Node, and Python, allowing me to navigate the entire
              product development lifecycle seamlessly. Proficient in Docker
              containerization and skilled in MongoDB databases, I specialize in
              designing and implementing efficient data management solutions.
              Currently, I'm focused on leveraging Next.js to build cutting-edge
              web applications that push the boundaries of technology.`}
            </GradientText>
          </h3>
        </div>
      </div>
    </section>
  );
}
