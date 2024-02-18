import ProjectCard from '@/components/cards/projectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a small project description.',
    },
    {
      id: 1,
      name: 'Project 2',
      description: 'This is a small project description.',
    },
    {
      id: 2,
      name: 'Project 3',
      description: 'This is a small project description.',
    },
    {
      id: 3,
      name: 'Project 4',
      description: 'This is a small project description.',
    },
    {
      id: 4,
      name: 'Project 5',
      description: 'This is a small project description.',
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-12 mx-3">
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
  );
}
