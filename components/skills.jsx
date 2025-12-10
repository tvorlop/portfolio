import skills from '/data/skills/'

const Skills = () => {
  return (
    <>
      <h4>Skills - My current skills</h4>
      <ul>
        {skills.map((skill) => (
          <li key={skill.category}>
            <div className="skill-list">
              <div className="skill-category">{skill.category}</div>
              <div className="skill-items">
                {skill.items.map((item) => (
                  <li key={skill.items.item}>{item}</li>
                ))}
              </div>
              <br />
            </div>
          </li>
        ))}
      </ul>
      <br />
    </>
  )
}

export default Skills
