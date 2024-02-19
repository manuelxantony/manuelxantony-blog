import GradientText from '../gradient';

export default function About() {
  return (
    <section className="container mx-auto">
      <div className="h-screen w-full flex justify-center items-center p-20 ">
        <div className="md:w-[750px]">
          <h4>
            <GradientText>
              A software engineer is a creative problem solver who designs,
              develops, and maintains software systems to meet specific needs.
              They possess strong analytical skills, adept at coding and
              debugging, ensuring efficient and reliable software solutions.
              With a passion for innovation, they continuously adapt to emerging
              technologies, collaborating within teams to build cutting-edge
              software products that shape the digital landscape.
            </GradientText>
          </h4>
        </div>
      </div>
    </section>
  );
}
