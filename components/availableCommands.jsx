import commands from '/data/commands/'

const AvailableCommands = ({ handleCommand }) => {
  return (
    <label>
      {' '}
      <span style={{ textDecoration: 'underline' }}>Available Commands:</span>
      <br />
      <ul>
        {commands.map((command) => (
          <li key={command.name}>
            <div className="command-list">
              <div
                className="command-name"
                onClick={() => handleCommand(command.name)}
              >
                {command.name}
              </div>
              <div className="command-description">{command.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <br />
    </label>
  )
}

export default AvailableCommands
