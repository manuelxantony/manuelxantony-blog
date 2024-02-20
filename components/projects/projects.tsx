import ProjectCard from '@/components/cards/projectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a small project description.',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is a small project description.',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a small project description.',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is a small project description.',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is a small project description.',
    },
  ];

  return (
    <div>
      <section className="container mx-auto">
        <h1 className="font-bold mt-96 mx-3 mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
