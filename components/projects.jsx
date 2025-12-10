import projects from '/data/projects/'
import ProjectCard from '/components/projectCard/'

const Projects = () => {
  return (
    <>
      <h4>My Projects - Live</h4>
      <br />
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          command={project.alias}
          description={project.briefDesc}
          tech={project.stack}
          link={project.link}
        />
      ))}
      <br />
    </>
  )
}

export default Projects
