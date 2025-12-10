const ProjectCard = (props) => {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <p>
        $ <span style={{ color: 'cyan' }}>{props.command}</span> - {props.name}
      </p>

      <div
        className="project-card"
        style={{ paddingTop: '1rem', paddingBottom: '2rem' }}
      >
        <div className="card-call">Description</div>
        <div className="card-answer">{props.description}</div>
        <div className="card-call">Stack</div>
        <div className="card-answer">{props.tech}</div>
        <div className="card-call">Link</div>
        <div className="card-answer">
          <a
            href={props.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {props.link}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
