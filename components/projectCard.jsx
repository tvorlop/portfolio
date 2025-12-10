const ProjectCard = (props) => {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <p>
        $ <span style={{ color: 'cyan' }}>{props.command}</span> - {props.name}
      </p>
      <div style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <p style={{ padding: '.25rem 0' }}>Description {props.description}</p>
        <p style={{ padding: '.25rem 0' }}>Stack {props.tech}</p>
        <p style={{ padding: '.25rem 0' }}>
          Link{' '}
          <a
            href="{props.link}"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {props.link}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
