import ProjectCard from '@/components/cards/projectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Snapshop',
      description: 'A minimalistic shopping cart',
      url: 'https://snapshop-eight.vercel.app/',
      github: 'https://github.com/manuelxantony/snapshop',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is a small project description.',
      url: '',
      github: 'https://github.com/manuelxantony/snapshop',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a small project description.',
      url: '',
      github: '',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is a small project description.',
      url: '',
      github: '',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is a small project description.',
      url: '',
      github: '',
    },
  ];

  return (
    <section className="container mx-auto mt-96 ">
      <div className="w-full relative h-8">
        <div className="blur-line" />
      </div>
      <h1 className="font-bold  mx-3 mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              url={project.url}
              github={project.github}
            />
          );
        })}
      </div>
    </section>
  );
}
