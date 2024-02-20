import GradientText from '../gradient';

export default function About() {
  return (
    <section className="container mx-auto">
      <div className="w-full flex justify-start">
        <div className="md:w-[750px]">
          <h1 className="font-bold mb-4">About</h1>
          <h3 className="text-justify">
            <GradientText>
              A software engineer is a creative problem solver who designs,
              develops, and maintains software systems to meet specific needs.
              They possess strong analytical skills, adept at coding and
              debugging, ensuring efficient and reliable software solutions.
              With a passion for innovation, they continuously adapt to emerging
              technologies, collaborating within teams to build cutting-edge
              software products that shape the digital landscape.
            </GradientText>
          </h3>
        </div>
      </div>
    </section>
  );
}
