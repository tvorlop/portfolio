import commands from '/data/commands/'

const AvailableCommands = () => {
  return (
    <label>
      {' '}
      <span style={{ textDecoration: 'underline' }}>Available Commands:</span>
      <br />
      <ul>
        {commands.map((command) => (
          <li key={command.name}>
            <div className="command-list">
              <div>{command.name}</div>
              <div>{command.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <br />
    </label>
  )
}

export default AvailableCommands
