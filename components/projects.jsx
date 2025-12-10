import projects from '/data/projects/'
import AvailableCommands from '/components/availableCommands/'
import ProjectCard from '/components/projectCard/'

const Projects = () => {
  return (
    <>
      <h4>Projects</h4>
      <br />
      <AvailableCommands />
      <br />
      <p>My Projects - Live</p>
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
