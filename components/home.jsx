import commands from '/data/commands/'

const Home = () => {
  return (
    <>
      <p>Welcome to Pixel Pulse Studios - Taylor Vorlop</p>
      <br />
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
      </label>
      <br />
    </>
  )
}

export default Home
