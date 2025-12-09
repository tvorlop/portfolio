import AvailableCommands from '/components/availableCommands/'

const Home = () => {
  return (
    <>
      <h4>Pixel Pulse Studios - Taylor Vorlop</h4>
      <br />
      <AvailableCommands />
      <br />
      <p>Welcome to Pixel Pulse Studios!</p>
      <br />
      <p style={{ paddingTop: '1rem' }}>
        Click on one of the{' '}
        <span style={{ color: 'cyan' }}>Availble Commands</span>
        <br />
        or
        <br />
        Use the <span style={{ color: 'magenta' }}>command line</span> to
        navigate the site!
      </p>
      <br />
    </>
  )
}

export default Home
